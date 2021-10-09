export const statModifierOptions = [
    '-5',
    '-4',
    '-3',
    '-2',
    '-1',
    '+0',
    '+1',
    '+2',
    '+3',
    '+4',
    '+5',
    '+6',
    '+7',
    '+8',
    '+9',
    '+10'
] as const
type AllStatModifierTypes = typeof statModifierOptions
export type StatModifierType = AllStatModifierTypes[number]

export type StatsState = {
    strength?: number,
    strengthModifier?: StatModifierType,
    constitution?: number,
    constitutionModifier?: StatModifierType,
    dexterity?: number,
    dexterityModifier?: StatModifierType,
    intelligence?: number,
    intelligenceModifier?: StatModifierType,
    charisma?: number,
    charismaModifier?: StatModifierType
    wisdom?: number,
    wisdomModifier?: StatModifierType
}