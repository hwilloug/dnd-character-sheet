import { call, put } from 'redux-saga/effects'
import * as APIServices from '../../../server'
import { GetFeaturesAPI } from '../../../server/character'
import { featuresActions } from '../state/actions'

export function createGetFeaturesSaga(apiServices: APIServices.Services) {
  return function* getFeaturesSaga(
    action: ReturnType<typeof featuresActions.getFeatures>
  ) {
    try {

      const response: GetFeaturesAPI.Responses = yield call(
        apiServices.getFeaturesAPI,
        action.payload.character_id,
        'test-token'
      )

      yield put(featuresActions.setFeatures(
        response.body
      ))

    } catch (e) {
      console.log(e)
    }
  }
}