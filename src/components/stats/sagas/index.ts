import { takeEvery, takeLatest } from "@redux-saga/core/effects"
import * as APIServices from '../../../server'
import { createGetStatsSaga } from './get-stats'
import { StatsActionTypes } from "../state/actions"
import { createGetModifiersSaga } from "./get-modifiers"
import { createGetLevelSaga } from "./get-level"

export function createStatsSaga(apiServices: APIServices.Services) {
    const getStatsSaga = createGetStatsSaga(apiServices)
    const getModifiersSaga = createGetModifiersSaga()
    const getLevelSaga = createGetLevelSaga()

    return function* () {
        yield takeEvery(StatsActionTypes.GET_STATS, getStatsSaga)
        yield takeEvery(StatsActionTypes.GET_STATS_MODIFIERS, getModifiersSaga)
        yield takeLatest(StatsActionTypes.GET_LEVEL, getLevelSaga)
    }
}