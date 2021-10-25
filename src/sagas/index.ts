import { fork, all } from "redux-saga/effects"
import { createCharacterInfoSaga } from "../components/character-info/sagas"
import { createFeaturesSaga } from "../components/features/sagas"
import { createItemsSaga } from "../components/items/sagas"
import { createStatsSaga } from "../components/stats/sagas"
import * as APIServices from '../server'


export function createRootSaga(apiServices: APIServices.Services) {
  const statsSaga = createStatsSaga(apiServices)
  const characterInfoSaga = createCharacterInfoSaga(apiServices)
  const featuresSaga = createFeaturesSaga(apiServices)
  const itemsSaga = createItemsSaga(apiServices)

  const sagas = [
    fork(statsSaga),
    fork(characterInfoSaga),
    fork(featuresSaga),
    fork(itemsSaga)
  ]

  return function* () {
    yield all(sagas)
  }
}