import { fork, all } from "redux-saga/effects"
import { createCharacterInfoSaga } from "../components/character-info/sagas"
import { createStatsSaga } from "../components/stats/sagas"
import * as APIServices from '../server'


export function createRootSaga(apiServices: APIServices.Services) {
  const statsSaga = createStatsSaga(apiServices)
  const characterInfoSaga = createCharacterInfoSaga(apiServices)

  const sagas = [
    fork(statsSaga),
    fork(characterInfoSaga)
  ]

  return function* () {
    yield all(sagas)
  }
}