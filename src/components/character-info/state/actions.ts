import { ActionsUnion, createAction } from "../../../state/action"
import { CharacterInfoState } from "./state"

export enum CharacterInfoActionsTypes {
    GET_CHARACTER_INFO = '[character-info] get',
    SET_CHARACTER_INFO = '[character-info] set'
}

export const characterInfoActions = {
    getCharacterInfo: (character_id: string) => 
        createAction(CharacterInfoActionsTypes.GET_CHARACTER_INFO, {
            character_id
        }),
    setCharacterInfo: (character_id: string, character_info: CharacterInfoState) => 
        createAction(CharacterInfoActionsTypes.SET_CHARACTER_INFO, {
            character_id,
            character_info
        })
}

export type CharacterInfoActions = ActionsUnion<typeof characterInfoActions>