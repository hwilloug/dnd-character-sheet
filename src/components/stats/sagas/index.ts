import { takeEvery } from "@redux-saga/core/effects"
import * as APIServices from '../../../server'
import { createGetStatsSaga } from './get-stats'
import { StatsActionTypes } from "../state/actions"

export function createStatsSaga(apiServices: APIServices.Services) {
    const getStatsSaga = createGetStatsSaga(apiServices)

    return function* () {
        yield takeEvery(StatsActionTypes.GET_STATS, getStatsSaga)
    }
}