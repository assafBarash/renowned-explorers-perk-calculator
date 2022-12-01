export enum PerkTrees {
  Archaeologist = 'archaeologist',
  Diplomat = 'diplomat',
  Beguiler = 'beguiler',
  QuickThinker = 'quickThinker',
  Tactician = 'tactician',
  Engineer = 'engineer',
  Rogue = 'rogue',
  Athlete = 'athlete',
  Naturalist = 'naturalist',
  Survivalist = 'survivalist',
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
