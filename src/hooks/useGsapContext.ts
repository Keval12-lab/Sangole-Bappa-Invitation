import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';

/**
 * Clean GSAP hook that automatically scopes animations to a ref container
 * and handles cleanup on component unmount.
 */
export function useGsapContext(
  animationCallback: (context: gsap.Context) => void,
  dependencies: unknown[] = []
) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      animationCallback(ctx);
    }, containerRef);

    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies);

  return containerRef;
}
