import { call, put } from 'redux-saga/effects'
import * as APIServices from '../../../server'
import { GetSkillsProficienciesAPI } from '../../../server/character'
import { statsActions } from '../state/actions'

export function createGetSkillsProficienciesSaga(apiServices: APIServices.Services) {
    return function* getSkillsProficienciesSaga(
        action: ReturnType<typeof statsActions.getStats>
    ) {
        try {

            const response: GetSkillsProficienciesAPI.Responses = yield call(
                apiServices.getSkillsProficienciesAPI,
                action.payload.character_id,
                'test-token'
            )

            yield put(statsActions.setSkillsProficiencies(
                response.body
            ))

        } catch (e) {
            console.log(e)
        }
    }
}