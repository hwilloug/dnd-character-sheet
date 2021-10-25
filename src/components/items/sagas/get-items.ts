import { call, put } from 'redux-saga/effects'
import * as APIServices from '../../../server'
import { GetItemsAPI } from '../../../server/character'
import { itemsActions } from '../state/actions'

export function createGetItemsSaga(apiServices: APIServices.Services) {
  return function* getItemsSaga(
    action: ReturnType<typeof itemsActions.getItems>
  ) {
    try {

      const response: GetItemsAPI.Responses = yield call(
        apiServices.GetItemsAPI,
        action.payload.character_id,
        'test-token'
      )

      yield put(itemsActions.setItems(
        response.body
      ))

    } catch (e) {
      console.log(e)
    }
  }
}