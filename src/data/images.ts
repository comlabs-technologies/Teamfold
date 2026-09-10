/**
 * Central image registry. Each image is used exactly once on the site;
 * widths are requested to suit the largest container they render in.
 */
export const editorialImages = {
  /** Portrait orientation — rendered in the founder portrait frame. */
  founderPortrait:
    "https://images.pexels.com/photos/4872067/pexels-photo-4872067.jpeg?auto=compress&cs=tinysrgb&w=1600",

  workingSession:
    "https://images.pexels.com/photos/7674625/pexels-photo-7674625.jpeg?auto=compress&cs=tinysrgb&w=1800",

  managerCoaching:
    "https://images.pexels.com/photos/7640478/pexels-photo-7640478.jpeg?auto=compress&cs=tinysrgb&w=1800",

  teamCulture:
    "https://images.pexels.com/photos/3860865/pexels-photo-3860865.jpeg?auto=compress&cs=tinysrgb&w=1800",
} as const;

export type EditorialImageKey = keyof typeof editorialImages;
