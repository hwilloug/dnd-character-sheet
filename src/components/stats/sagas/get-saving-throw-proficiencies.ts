import { call, put } from 'redux-saga/effects'
import * as APIServices from '../../../server'
import { GetSavingThrowProficienciesAPI } from '../../../server/character'
import { statsActions } from '../state/actions'

export function createGetSavingThrowProficienciesSaga(apiServices: APIServices.Services) {
    return function* getSavingThrowProficienciesSaga(
        action: ReturnType<typeof statsActions.getSavingThrowProficiencies>
    ) {
        try {

            const response: GetSavingThrowProficienciesAPI.Responses = yield call(
                apiServices.getSavingThrowProficienciesAPI,
                action.payload.character_id,
                'test-token'
            )

            yield put(statsActions.setSavingThrowProficiencies(
                response.body
            ))

        } catch (e) {
            console.log(e)
        }
    }
}