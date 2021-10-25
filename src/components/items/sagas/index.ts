import { takeLatest } from "@redux-saga/core/effects"
import * as APIServices from '../../../server'
import { createGetItemsSaga } from './get-items'
import { ItemsActionsType } from "../state/actions"

export function createItemsSaga(apiServices: APIServices.Services) {
  const getItemsSaga = createGetItemsSaga(apiServices)

  return function* () {
    yield takeLatest(ItemsActionsType.GET_ITEMS, getItemsSaga)
  }
}