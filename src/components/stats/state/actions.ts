import { ActionsUnion, createAction } from "../../../state/action"
import { StatsState } from "./state"

export enum StatsActionTypes {
    GET_STATS = '[stats] get',
    SET_STATS = '[stats] set'
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
        })
}

export type StatsActions = ActionsUnion<typeof statsActions>