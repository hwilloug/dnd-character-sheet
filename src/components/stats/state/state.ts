export type StatsState = {
    abilityScores: AbilityScoresObject,
    abilityScoresModifiers: AbilityScoreModifiersObject,
    level: LevelObject,
    skills: SkillsObject,
    skillsProficiencies: SkillsProficienciesObject,
    savingThrows: SavingThrowsObject,
    savingThrowsProficiencies: SavingThrowsProficienciesObject,
    passiveWisdom?: number
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
    experiencePoints?: number,
    proficiencyBonus?: ProficiencyBonusType
}

export type SkillsObject = {
    acrobatics?: StatModifierType,
    animalHandling?: StatModifierType,
    arcana?: StatModifierType,
    athletics?: StatModifierType,
    deception?: StatModifierType,
    history?: StatModifierType,
    insight?: StatModifierType,
    intimidation?: StatModifierType,
    investigation?: StatModifierType,
    medicine?: StatModifierType,
    nature?: StatModifierType,
    perception?: StatModifierType,
    performance?: StatModifierType,
    persuasion?: StatModifierType,
    religion?: StatModifierType,
    sleightOfHand?: StatModifierType,
    stealth?: StatModifierType,
    survival?: StatModifierType
}

export type SkillsProficienciesObject = {
    acrobatics?: boolean,
    animalHandling?: boolean,
    arcana?: boolean,
    athletics?: boolean,
    deception?: boolean,
    history?: boolean,
    insight?: boolean,
    intimidation?: boolean,
    investigation?: boolean,
    medicine?: boolean,
    nature?: boolean,
    perception?: boolean,
    performance?: boolean,
    persuasion?: boolean,
    religion?: boolean,
    sleightOfHand?: boolean,
    stealth?: boolean,
    survival?: boolean
}

export type SavingThrowsObject = {
    strength?: StatModifierType,
    constitution?: StatModifierType,
    intelligence?: StatModifierType,
    charisma?: StatModifierType,
    dexterity?: StatModifierType,
    wisdom?: StatModifierType
}

export type SavingThrowsProficienciesObject = {
    strength?: boolean,
    constitution?: boolean,
    intelligence?: boolean,
    charisma?: boolean,
    dexterity?: boolean,
    wisdom?: boolean
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