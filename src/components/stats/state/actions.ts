import { ActionsUnion, createAction } from "../../../state/action"
import { StatsState } from "./state"

export enum StatsActionTypes {
    GET_STATS = '[stats] get',
    SET_STATS = '[stats] set',
    GET_STATS_MODIFIERS = '[stats] get modifiers',
    SET_STATS_MODIFIERS = '[stats] set modifiers'
}

export const statsActions = {
    getStats: (character_id: string) => 
        createAction(StatsActionTypes.GET_STATS, {
            character_id
        }),
    setStats: (character_id: string, stats: StatsState) => 
        createAction(StatsActionTypes.SET_STATS, {
            character_id,
            stats
        }),
    getStatsModifiers: () =>
        createAction(StatsActionTypes.GET_STATS_MODIFIERS, {}),
    setStatsModifiers: (character_id: string, stats_modifiers: StatsState) =>
        createAction(StatsActionTypes.SET_STATS_MODIFIERS, {
            character_id,
            stats_modifiers
        })
}

export type StatsActions = ActionsUnion<typeof statsActions>