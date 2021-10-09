import { StatsActions, StatsActionTypes } from "./actions";
import { StatsState } from "./state";

export const initialState: StatsState = {
    strength: 0,
    dexterity: 0,
    constitution: 0,
    wisdom: 0,
    intelligence: 0,
    charisma: 0
}

export function statsReducer(
    previousState: StatsState | undefined,
    action: StatsActions
): StatsState {
    const state = previousState || initialState

    switch (action.type) {
        case StatsActionTypes.SET_STATS:
            return {
                strength: action.payload.stats.strength,
                charisma: action.payload.stats.charisma,
                dexterity: action.payload.stats.dexterity,
                wisdom: action.payload.stats.wisdom,
                intelligence: action.payload.stats.intelligence,
                constitution: action.payload.stats.constitution
            }
        case StatsActionTypes.SET_STATS_MODIFIERS:
            return {
                ...state,
                strengthModifier: action.payload.stats_modifiers.strengthModifier,
                charismaModifier: action.payload.stats_modifiers.charismaModifier,
                dexterityModifier: action.payload.stats_modifiers.dexterityModifier,
                wisdomModifier: action.payload.stats_modifiers.wisdomModifier,
                intelligenceModifier: action.payload.stats_modifiers.intelligenceModifier,
                constitutionModifier: action.payload.stats_modifiers.constitutionModifier,
            }
        default: 
            return state
    }
}