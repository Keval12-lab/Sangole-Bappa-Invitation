import gsap from 'gsap';

export interface AudioState {
  isPlaying: boolean;
  isMuted: boolean;
  volume: number;
}

type AudioListener = (state: AudioState) => void;

class DevotionalAudioManager {
  private static instance: DevotionalAudioManager | null = null;
  private audio: HTMLAudioElement | null = null;
  private readonly audioSrc = '/assets/audio/bappa-introduction.mpeg';
  private readonly targetVolume = 0.20;
  private readonly fadeDuration = 0.7; // ~700ms responsive fade
  private isMutedState = false;
  private isPlayingState = false;
  private isReadyState = false;
  private pendingPlayRequested = false;
  private listeners = new Set<AudioListener>();

  private constructor() {
    // Lazily initialized in browser context
  }

  public static getInstance(): DevotionalAudioManager {
    if (!DevotionalAudioManager.instance) {
      DevotionalAudioManager.instance = new DevotionalAudioManager();
    }
    return DevotionalAudioManager.instance;
  }

  private getAudioElement(): HTMLAudioElement {
    if (!this.audio && typeof window !== 'undefined') {
      this.audio = new Audio();
      this.audio.src = this.audioSrc;
      this.audio.preload = 'metadata'; // Initial page load: metadata only (zero network blocking)
      this.audio.loop = true;
      this.audio.volume = 0;

      if (typeof window !== 'undefined') {
        (window as unknown as Record<string, unknown>).__devotionalAudioManager = this;
        (window as unknown as Record<string, unknown>).__devotionalAudio = this.audio;
      }

      // Track media ready events
      const markReady = () => {
        this.isReadyState = true;
        // If curtain already completed while waiting for media buffer, start immediately
        if (this.pendingPlayRequested) {
          this.pendingPlayRequested = false;
          this.executePlayback();
        }
      };

      this.audio.addEventListener('canplay', markReady);
      this.audio.addEventListener('canplaythrough', markReady);

      // Track playback state changes from native media events
      this.audio.addEventListener('play', () => {
        this.isPlayingState = true;
        this.notifyListeners();
      });

      this.audio.addEventListener('pause', () => {
        this.isPlayingState = false;
        this.notifyListeners();
      });

      this.audio.addEventListener('ended', () => {
        this.isPlayingState = false;
        this.notifyListeners();
      });

      this.audio.addEventListener('error', () => {
        this.isPlayingState = false;
        this.pendingPlayRequested = false;
        this.notifyListeners();
      });
    }
    return this.audio!;
  }

  /**
   * Called synchronously on the explicit "TAP TO OPEN" user interaction.
   * Switches preload to 'auto' and calls load() so the browser pre-buffers
   * and decodes the 647 KB audio file during the 2.04-second curtain animation.
   */
  public prepare(): void {
    if (typeof window === 'undefined') return;
    try {
      const audio = this.getAudioElement();
      audio.preload = 'auto';
      audio.volume = 0;
      audio.load();
    } catch {
      // Gracefully handle browser policy rejection without throwing or spamming console
    }
  }

  /**
   * Called at the exact GSAP timeline milestone where the curtain opening
   * completes and Intro hands off to Hero (tl.onComplete).
   */
  public play(): void {
    if (typeof window === 'undefined') return;
    try {
      const audio = this.getAudioElement();

      // If already playing, do not restart
      if (!audio.paused && this.isPlayingState) {
        return;
      }

      // Check readiness: HAVE_FUTURE_DATA (3) or HAVE_ENOUGH_DATA (4)
      const isMediaReady = this.isReadyState || audio.readyState >= HTMLMediaElement.HAVE_FUTURE_DATA;

      if (isMediaReady) {
        this.executePlayback();
      } else {
        // Media still buffering: mark pending and trigger the instant canplay fires
        this.pendingPlayRequested = true;
        const onCanPlay = () => {
          audio.removeEventListener('canplay', onCanPlay);
          audio.removeEventListener('canplaythrough', onCanPlay);
          if (this.pendingPlayRequested) {
            this.pendingPlayRequested = false;
            this.executePlayback();
          }
        };
        audio.addEventListener('canplay', onCanPlay, { once: true });
        audio.addEventListener('canplaythrough', onCanPlay, { once: true });
      }
    } catch {
      // Gracefully handle any unexpected media initialization error
    }
  }

  /**
   * Internal execution of playback and immediate volume fade.
   * Begins volume fade immediately without waiting for playPromise resolution.
   */
  private executePlayback(): void {
    if (!this.audio) return;
    const audio = this.audio;

    // Start playback immediately
    const playPromise = audio.play();

    // Begin volume fade immediately (eliminates promise microtask latency)
    if (!this.isMutedState) {
      gsap.killTweensOf(audio);
      gsap.to(audio, {
        volume: this.targetVolume,
        duration: this.fadeDuration,
        ease: 'sine.out',
        onUpdate: () => {
          this.notifyListeners();
        },
      });
    }

    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          this.isPlayingState = true;
          this.notifyListeners();
        })
        .catch(() => {
          // Autoplay policy rejection handled silently without console spam
          gsap.killTweensOf(audio);
          audio.volume = 0;
          this.isPlayingState = false;
          this.notifyListeners();
        });
    }
  }

  /**
   * Mute devotional music.
   * Sets volume to 0. Does NOT pause playback or reset currentTime.
   */
  public mute(): void {
    if (typeof window === 'undefined') return;
    const audio = this.getAudioElement();
    this.isMutedState = true;
    gsap.killTweensOf(audio);
    audio.volume = 0;
    this.notifyListeners();
  }

  /**
   * Unmute devotional music.
   * Restores volume to targetVolume (0.20). Strictly preserves currentTime.
   * If audio was paused (e.g. strict mobile autoplay block earlier), initiates playback.
   */
  public unmute(): void {
    if (typeof window === 'undefined') return;
    const audio = this.getAudioElement();
    this.isMutedState = false;

    if (audio.paused) {
      audio.volume = 0;
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            this.isPlayingState = true;
            this.notifyListeners();
            gsap.killTweensOf(audio);
            gsap.to(audio, {
              volume: this.targetVolume,
              duration: 0.4,
              ease: 'power1.out',
              onUpdate: () => this.notifyListeners(),
            });
          })
          .catch(() => {
            this.isPlayingState = false;
            this.notifyListeners();
          });
        return;
      }
    }

    gsap.killTweensOf(audio);
    audio.volume = this.targetVolume;
    this.notifyListeners();
  }

  /**
   * Toggle between muted and unmuted.
   * If audio was paused due to delayed autoplay rejection, recovers playback immediately.
   */
  public toggleMute(): void {
    const audio = this.audio;
    if (audio && audio.paused) {
      this.unmute();
      return;
    }

    if (this.isMutedState) {
      this.unmute();
    } else {
      this.mute();
    }
  }

  public getState(): AudioState {
    const audio = this.audio;
    return {
      isPlaying: this.isPlayingState,
      isMuted: this.isMutedState,
      volume: audio ? audio.volume : 0,
    };
  }

  public getAudio(): HTMLAudioElement | null {
    return this.audio;
  }

  public subscribe(listener: AudioListener): () => void {
    this.listeners.add(listener);
    listener(this.getState());
    return () => {
      this.listeners.delete(listener);
    };
  }

  private notifyListeners(): void {
    const state = this.getState();
    this.listeners.forEach((listener) => listener(state));
  }
}

export const audioManager = DevotionalAudioManager.getInstance();
