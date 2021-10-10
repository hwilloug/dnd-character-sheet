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
    }
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
                    level: action.payload.level
                }
            }
        default: 
            return state
    }
}