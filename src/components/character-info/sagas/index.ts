import { takeEvery } from "@redux-saga/core/effects"
import * as APIServices from '../../../server'
import { createGetCharacterInfoSaga } from './get-character-info'
import { CharacterInfoActionsTypes } from "../state/actions"

export function createCharacterInfoSaga(apiServices: APIServices.Services) {
  const getCharacterInfoSaga = createGetCharacterInfoSaga(apiServices)

  return function* () {
    yield takeEvery(CharacterInfoActionsTypes.GET_CHARACTER_INFO, getCharacterInfoSaga)
  }
}