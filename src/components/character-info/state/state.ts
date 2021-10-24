export const classOptions = [
  'Barbarian',
  'Bard',
  'Cleric',
  'Druid',
  'Fighter',
  'Monk',
  'Paladin',
  'Ranger',
  'Rogue',
  'Sorcerer',
  'Warlock',
  'Wizard'
] as const
type AllClassOptionsTypes = typeof classOptions
export type ClassOptionsType = AllClassOptionsTypes[number]

export const raceOptions = [
  'Dragonborn',
  'Dwarf',
  'Elf',
  'Gnome',
  'Half-Elf',
  'Halfling',
  'Half-Orc',
  'Human',
  'Tiefling'
] as const
type AllRaceOptionsTypes = typeof raceOptions
export type RaceOptionsType = AllRaceOptionsTypes[number]

export const alignmentOptions = [
  'Lawful good',
  'Neutral good',
  'Chaotic good',
  'Lawful neutral',
  'Neutral',
  'Chaotic neutral',
  'Lawful evil',
  'Neutral evil',
  'Chaotic evil'
] as const
type AllAlignmentOptionsTypes = typeof alignmentOptions
export type AlignmentOptionsType = AllAlignmentOptionsTypes[number]

export type CharacterInfoState = {
    characterName?: string,
    class?: ClassOptionsType,
    race?: RaceOptionsType,
    alignment?: AlignmentOptionsType,
    background?: string,
    playerName?: string
    age?: number,
    height?: string,
    eyes?: string,
    skin?: string,
    weight?: string,
    hair?: string,
    personality?: string,
    ideals?: string,
    bonds?: string,
    flaws?: string
}