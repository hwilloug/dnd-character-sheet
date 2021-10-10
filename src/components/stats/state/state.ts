export type StatsState = {
    abilityScores: AbilityScoresObject,
    abilityScoresModifiers: AbilityScoreModifiersObject,
    level: LevelObject
}

export type AbilityScoresObject = {
    strength?: number,
    constitution?: number,
    intelligence?: number,
    charisma?: number,
    dexterity?: number,
    wisdom?: number
}

export type AbilityScoreModifiersObject = {
    strengthModifier?: StatModifierType,
    constitutionModifier?: StatModifierType,
    dexterityModifier?: StatModifierType,
    intelligenceModifier?: StatModifierType,
    charismaModifier?: StatModifierType,
    wisdomModifier?: StatModifierType,
}

export type LevelObject = {
    level?: number,
    experiencePoints: number,
    proficiencyBonus: ProficiencyBonusType
}

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

export const proficiencyBonusOptions = [
    '+2',
    '+3',
    '+4',
    '+5',
    '+6'
] as const
type AllProficiencyBonusTypes = typeof proficiencyBonusOptions
export type ProficiencyBonusType = AllProficiencyBonusTypes[number]