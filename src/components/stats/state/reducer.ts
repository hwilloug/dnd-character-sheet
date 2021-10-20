import { StatsActions, StatsActionTypes } from "./actions";
import { StatsState } from "./state";

export const initialState: StatsState = {
  abilityScores: {
    strength: 0,
    dexterity: 0,
    constitution: 0,
    wisdom: 0,
    intelligence: 0,
    charisma: 0
  },
  abilityScoresModifiers: {
    strengthModifier: '+0',
    dexterityModifier: '+0',
    constitutionModifier: '+0',
    wisdomModifier: '+0',
    intelligenceModifier: '+0',
    charismaModifier: '+0'
  },
  level: {
    level: 1,
    experiencePoints: 0,
    proficiencyBonus: '+2'
  },
  skills: {        
    acrobatics: '+0',
    animalHandling: '+0',
    arcana: '+0',
    athletics: '+0',
    deception: '+0',
    history: '+0',
    insight: '+0',
    intimidation: '+0',
    investigation: '+0',
    medicine: '+0',
    nature: '+0',
    perception: '+0',
    performance: '+0',
    persuasion: '+0',
    religion: '+0',
    sleightOfHand: '+0',
    stealth: '+0',
    survival: '+0'
  },
  skillsProficiencies: {
    acrobatics: false,
    animalHandling: false,
    arcana: false,
    athletics: false,
    deception: false,
    history: false,
    insight: false,
    intimidation: false,
    investigation: false,
    medicine: false,
    nature: false,
    perception: false,
    performance: false,
    persuasion: false,
    religion: false,
    sleightOfHand: false,
    stealth: false,
    survival: false
  },
  savingThrows: {
    strength: '+0',
    constitution: '+0',
    intelligence: '+0',
    charisma: '+0',
    dexterity: '+0',
    wisdom: '+0'
  },
  savingThrowsProficiencies: {
    strength: false,
    constitution: false,
    intelligence: false,
    charisma: false,
    dexterity: false,
    wisdom: false
  },

}
export function statsReducer(
  previousState: StatsState | undefined,
  action: StatsActions
): StatsState {
  const state = previousState || initialState

  switch (action.type) {
  case StatsActionTypes.SET_STATS:
    return {
      ...state,
      abilityScores: {
        strength: action.payload.stats.strength,
        charisma: action.payload.stats.charisma,
        dexterity: action.payload.stats.dexterity,
        wisdom: action.payload.stats.wisdom,
        intelligence: action.payload.stats.intelligence,
        constitution: action.payload.stats.constitution
      }
    }
  case StatsActionTypes.SET_STATS_MODIFIERS:
    return {
      ...state,
      abilityScoresModifiers: {
        strengthModifier: action.payload.stats_modifiers.strengthModifier,
        charismaModifier: action.payload.stats_modifiers.charismaModifier,
        dexterityModifier: action.payload.stats_modifiers.dexterityModifier,
        wisdomModifier: action.payload.stats_modifiers.wisdomModifier,
        intelligenceModifier: action.payload.stats_modifiers.intelligenceModifier,
        constitutionModifier: action.payload.stats_modifiers.constitutionModifier
      }
    }
  case StatsActionTypes.SET_EXPERIENCE_POINTS:
    return {
      ...state,
      level: {
        ...state.level,
        experiencePoints: action.payload.experience_points
      }
    }
  case StatsActionTypes.SET_LEVEL:
    return {
      ...state,
      level: {
        ...state.level,
        level: action.payload.level,
        proficiencyBonus: action.payload.proficiencyBonus
      }
    }
  case StatsActionTypes.SET_SKILLS:
    return {
      ...state,
      skills: {
        ...state.skills,
        ...action.payload.skills
      }
    }
  case StatsActionTypes.SET_SKILLS_PROFICIENCIES:
    return {
      ...state,
      skillsProficiencies: {
        ...state.skillsProficiencies,
        ...action.payload.skillsProficiencies
      }
    }
  case StatsActionTypes.SET_SAVING_THROWS:
    return {
      ...state,
      savingThrows: {
        ...state.savingThrows,
        ...action.payload.savingThrows
      }
    }
  case StatsActionTypes.SET_SAVING_THROW_PROFICIENCIES:
    return {
      ...state,
      savingThrowsProficiencies: {
        ...state.savingThrowsProficiencies,
        ...action.payload.savingThrowProficiencies
      }
    }
  default: 
    return state
  }
}