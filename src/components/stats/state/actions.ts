import { ActionsUnion, createAction } from "../../../state/action"
import { AbilityScoreModifiersObject, AbilityScoresObject, StatsState } from "./state"

export enum StatsActionTypes {
    GET_STATS = '[stats] get',
    SET_STATS = '[stats] set',
    GET_STATS_MODIFIERS = '[stats] get modifiers',
    SET_STATS_MODIFIERS = '[stats] set modifiers',
    GET_EXPERIENCE_POINTS = '[stats] get experience points',
    SET_EXPERIENCE_POINTS = '[stats] set experience points',
    GET_LEVEL = '[stats] get level',
    SET_LEVEL = '[stats] set level'
}

export const statsActions = {
    getStats: (character_id: string) => 
        createAction(StatsActionTypes.GET_STATS, {
            character_id
        }),
    setStats: (character_id: string, stats: AbilityScoresObject) => 
        createAction(StatsActionTypes.SET_STATS, {
            character_id,
            stats
        }),
    getStatsModifiers: () =>
        createAction(StatsActionTypes.GET_STATS_MODIFIERS, {}),
    setStatsModifiers: (character_id: string, stats_modifiers: AbilityScoreModifiersObject) =>
        createAction(StatsActionTypes.SET_STATS_MODIFIERS, {
            character_id,
            stats_modifiers
        }),
    getExperiencePoints: (character_id: string) => 
        createAction(StatsActionTypes.GET_EXPERIENCE_POINTS, {
            character_id
        }),
    setExperiencePoints: (character_id: string, experience_points: number) => 
        createAction(StatsActionTypes.SET_EXPERIENCE_POINTS, {
            character_id,
            experience_points
        }),
    getLevel: (character_id: string) => 
        createAction(StatsActionTypes.GET_LEVEL, {
            character_id
        }),
    setLevel: (character_id: string, level: number) => 
        createAction(StatsActionTypes.SET_LEVEL, {
            character_id,
            level
        })
}

export type StatsActions = ActionsUnion<typeof statsActions>