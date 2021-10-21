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
      age: action.payload.character_info.age,
      eyes: action.payload.character_info.eyes,
      height: action.payload.character_info.height,
      skin: action.payload.character_info.skin,
      weight: action.payload.character_info.weight,
      hair: action.payload.character_info.hair,
    }
  default: 
    return state
  }
}