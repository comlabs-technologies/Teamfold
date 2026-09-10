/**
 * Central image registry. Swap the URLs here to rebrand the site.
 */
export const editorialImages = {
  peopleLeader:
    "https://images.pexels.com/photos/4872067/pexels-photo-4872067.jpeg?auto=compress&dpr=1&h=750&w=1260",

  teamCollaboration:
    "https://images.pexels.com/photos/7674625/pexels-photo-7674625.jpeg?auto=compress&dpr=1&h=750&w=1260",

  remoteMeeting:
    "https://images.pexels.com/photos/35273151/pexels-photo-35273151/free-photo-of-remote-meeting-on-laptop-screen-in-office.jpeg?auto=compress&dpr=1&h=750&w=1260",

  recruitmentInterview:
    "https://images.pexels.com/photos/7643739/pexels-photo-7643739.jpeg?auto=compress&dpr=1&h=750&w=1260",

  teamCulture:
    "https://images.pexels.com/photos/3860865/pexels-photo-3860865.jpeg?auto=compress&dpr=1&h=750&w=1260",

  managerCoaching:
    "https://images.pexels.com/photos/7640478/pexels-photo-7640478.jpeg?auto=compress&dpr=1&h=750&w=1260",
} as const;

export type EditorialImageKey = keyof typeof editorialImages;
