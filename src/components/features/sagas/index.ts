import { takeEvery } from "@redux-saga/core/effects"
import * as APIServices from '../../../server'
import { createGetFeaturesSaga } from './get-features'
import { FeaturesActionsTypes } from "../state/actions"

export function createFeaturesSaga(apiServices: APIServices.Services) {
  const getFeaturesSaga = createGetFeaturesSaga(apiServices)

  return function* () {
    yield takeEvery(FeaturesActionsTypes.GET_FEATURES, getFeaturesSaga)
  }
}