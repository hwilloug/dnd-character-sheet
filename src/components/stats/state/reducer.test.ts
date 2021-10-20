import { statsReducer, initialState } from "./reducer"
import { statsActions } from "./actions"
import { AbilityScoreModifiersObject, AbilityScoresObject, SavingThrowsObject, SavingThrowsProficienciesObject, SkillsObject, SkillsProficienciesObject } from "./state"

it('sets stats', () => {
  const newStats: AbilityScoresObject = {
    strength: 4,
    wisdom: 3,
    charisma: 21,
    constitution: 5,
    dexterity: 6,
    intelligence: 13
  }
  const state = statsReducer(
    initialState,
    statsActions.setStats('asdf', newStats)
  )
  expect(state).toMatchObject({
    ...initialState,
    abilityScores: newStats
  })
})

it('sets stats modifiers', () => {
  const newStats: AbilityScoreModifiersObject = {
    strengthModifier: '+1',
    wisdomModifier: '-3',
    charismaModifier: '+0',
    constitutionModifier: '+4',
    dexterityModifier: '-2',
    intelligenceModifier: '+3'
  }
  const state = statsReducer(
    initialState,
    statsActions.setStatsModifiers('asdf', newStats)
  )
  expect(state).toMatchObject({
    ...initialState,
    abilityScoresModifiers: newStats
  })
})

it('sets experience points', () => {
  const experiencePoints = 500
  const state = statsReducer(
    initialState,
    statsActions.setExperiencePoints('asdf', experiencePoints)
  )
  expect(state).toMatchObject({
    ...initialState,
    level: {
      ...initialState.level,
      experiencePoints
    }
  })
})

it('sets level', () => {
  const level = 15
  const proficiencyBonus = '+5'
  const state = statsReducer(
    initialState,
    statsActions.setLevel('asdf', level, proficiencyBonus)
  )
  expect(state).toMatchObject({
    ...initialState,
    level: {
      ...initialState.level,
      level,
      proficiencyBonus
    }
  })
})

it('sets skills', () => {
  const newStats: SkillsObject = {
    acrobatics: '+1',
    animalHandling: '-3',
    arcana: '+0',
    athletics: '+4',
    deception: '-2',
    history: '+3',
    insight: '+1',
    intimidation: '-3',
    investigation: '+0',
    medicine: '+4',
    nature: '-2',
    perception: '+3',
    performance: '+1',
    persuasion: '-3',
    religion: '+0',
    sleightOfHand: '+4',
    stealth: '-2',
    survival: '+3',
  }
  const state = statsReducer(
    initialState,
    statsActions.setSkills(newStats)
  )
  expect(state).toMatchObject({
    ...initialState,
    skills: newStats
  })
})

it('sets skill proficiencies', () => {
  const newProficiencies: SkillsProficienciesObject = {
    acrobatics: true,
    animalHandling: true,
    arcana: true,
    athletics: true,
    deception: true,
    history: true,
    insight: true,
    intimidation: true,
    investigation: true,
    medicine: true,
    nature: true,
    perception: true,
    performance: true,
    persuasion: true,
    religion: true,
    sleightOfHand: true,
    stealth: true,
    survival: true
  }
  const state = statsReducer(
    initialState,
    statsActions.setSkillsProficiencies(newProficiencies)
  )
  expect(state).toMatchObject({
    ...initialState,
    skillsProficiencies: newProficiencies
  })
})

it('sets saving throws', () => {
  const newSavingThrows: SavingThrowsObject = {
    strength: '+1',
    wisdom: '-3',
    charisma: '+6',
    constitution: '+4',
    dexterity: '-2',
    intelligence: '+3'
  }
  const state = statsReducer(
    initialState,
    statsActions.setSavingThrows(newSavingThrows)
  )
  expect(state).toMatchObject({
    ...initialState,
    savingThrows: newSavingThrows
  })
})

it('sets saving throw proficiencies', () => {
  const newProficiencies: SavingThrowsProficienciesObject = {
    strength: true,
    constitution: true,
    intelligence: true,
    charisma: true,
    dexterity: true,
    wisdom: true
  }
  const state = statsReducer(
    initialState,
    statsActions.setSavingThrowProficiencies(newProficiencies)
  )
  expect(state).toMatchObject({
    ...initialState,
    savingThrowsProficiencies: newProficiencies
  })
})
