/**
 * LOCKED EVENT CONSTANTS
 * Source of truth for event details and content.
 */

export const EVENT_DETAILS = {
  // Traditional Headings
  invocation: '॥ श्री गणेशाय नमः ॥',
  titleMarathi: 'आगमन सोहळा',
  subtitleMarathi: 'तो येतोय... एका नविन स्वरूपात',
  tagline: "LET'S WELCOME BAPPA WITH DEVOTION, DYNAMIC DRUMS AND ENDLESS ENERGY!",

  // Event specifics
  date: '14th September 2026',
  day: 'Monday',
  time: '10:00 AM onwards',

  // Venue & Location
  venueLine1: '82, Hari Om Nagar - 2,',
  venueLine2: 'New Kosad Road, Amroli,',
  venueCity: 'Surat',
  fullAddress: '82, Hari Om Nagar - 2, New Kosad Road, Amroli, Surat',
  latitude: 21.241430,
  longitude: 72.856315,
  coordinates: '21.241430, 72.856315',
  coordinatesArray: [72.856315, 21.241430],
  googleMapsUrl: 'https://www.google.com/maps?q=21.241430,72.856315',

  // Main Attraction
  attractionTitle: 'DJ ढोल ताशा',
  attractionSubtitle: 'अथांग नाद, असीम ऊर्जा',

  // Asset paths (safe public paths)
  assets: {
    ganpatiHero: '/assets/ganpati/bapp.png',
    dholLogo: '/assets/dhol/dhol-tasha-logo.png',
  },
} as const;

export type EventDetailsType = typeof EVENT_DETAILS;
