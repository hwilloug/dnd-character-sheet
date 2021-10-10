import { CharacterInfoActions, CharacterInfoActionsTypes } from "./actions";
import { CharacterInfoState } from "./state";

export const initialState: CharacterInfoState = {}

export function characterInfoReducer(
    previousState: CharacterInfoState | undefined,
    action: CharacterInfoActions
): CharacterInfoState {
    const state = previousState || initialState

    switch (action.type) {
        case CharacterInfoActionsTypes.SET_CHARACTER_INFO:
            return {
                ...state,
                characterName: action.payload.character_info.characterName,
                class: action.payload.character_info.class,
                race: action.payload.character_info.race,
                alignment: action.payload.character_info.alignment,
                background: action.payload.character_info.background,
                playerName: action.payload.character_info.playerName,
                experiencePoints: action.payload.character_info.experiencePoints,
                level: action.payload.character_info.level
            }
        case CharacterInfoActionsTypes.SET_EXPERIENCE_POINTS:
            return {
                ...state,
                experiencePoints: action.payload.experience_points
            }
        case CharacterInfoActionsTypes.SET_LEVEL:
            return {
                ...state,
                level: action.payload.level
            }
        default: 
            return state
    }
}