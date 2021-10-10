import { ActionsUnion, createAction } from "../../../state/action"
import { CharacterInfoState } from "./state"

export enum CharacterInfoActionsTypes {
    GET_CARACTER_INFO = '[character-info] get',
    SET_CHARACTER_INFO = '[character-info] set base info',
    SET_EXPERIENCE_POINTS = '[character-info] set experience points',
    GET_LEVEL = '[character-info] get level',
    SET_LEVEL = '[character-info] set level'
}

export const characterInfoActions = {
    getCharacterInfo: (character_id: string) => 
        createAction(CharacterInfoActionsTypes.GET_CARACTER_INFO, {
            character_id
        }),
    setCharacterInfo: (character_id: string, character_info: CharacterInfoState) => 
        createAction(CharacterInfoActionsTypes.SET_CHARACTER_INFO, {
            character_id,
            character_info
        }),
    setExperiencePoints: (character_id: string, experience_points: number) => 
        createAction(CharacterInfoActionsTypes.SET_EXPERIENCE_POINTS, {
            character_id,
            experience_points
        }),
    getLevel: (character_id: string) => 
        createAction(CharacterInfoActionsTypes.GET_LEVEL, {
            character_id
        }),
    setLevel: (character_id: string, level: number) => 
        createAction(CharacterInfoActionsTypes.SET_LEVEL, {
            character_id,
            level
        })
}

export type CharacterInfoActions = ActionsUnion<typeof characterInfoActions>