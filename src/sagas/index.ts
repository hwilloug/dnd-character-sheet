import { fork, all } from "redux-saga/effects"
import { createStatsSaga } from "../components/stats/sagas"
import * as APIServices from '../server'


export function createRootSaga(apiServices: APIServices.Services) {
    const statsSaga = createStatsSaga(apiServices)

    const sagas = [
        fork(statsSaga)
    ]

    return function* () {
        yield all(sagas)
    }
}