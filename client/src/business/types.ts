export enum PerkTrees {
  Archaeologist,
  Diplomat,
  Beguiler,
  QuickThinker,
  Tactician,
  Engineer,
  Rogue,
  Athlete,
  Naturalist,
  Survivalist,
}

export enum PerkSources {
  CrewMembers = 'crewMembers',
  Equipment = 'equipment',
  Entourage = 'entourage',
  EventsStories = 'eventsStories',
}

export type PerkData = {
  perk: string;
  [PerkSources.CrewMembers]: string[];
  [PerkSources.Equipment]: string[];
  [PerkSources.Entourage]: string[];
  [PerkSources.EventsStories]: string[];
};

export type PerksData = {
  [key in keyof typeof PerkTrees]: PerkData[];
};
