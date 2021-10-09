import { call, put } from 'redux-saga/effects'
import * as APIServices from '../../../server'
import { GetStatsAPI } from '../../../server/character'
import { statsActions } from '../state/actions'

export function createGetStatsSaga(apiServices: APIServices.Services) {
    return function* getStatsSaga(
        action: ReturnType<typeof statsActions.getStats>
    ) {
        try {

            const response: GetStatsAPI.Responses = yield call(
                apiServices.getStatsAPI,
                'test',
                'test-token'
            )

            yield put(statsActions.setStats(
                'test',
                {
                    strength: response.body.strength,
                    charisma: response.body.charisma,
                    dexterity: response.body.dexterity,
                    constitution: response.body.constitution,
                    wisdom: response.body.wisdom,
                    intelligence: response.body.intelligence
                }
            ))

            yield put(statsActions.getStatsModifiers())

        } catch (e) {
            console.log(e)
        }
    }
}