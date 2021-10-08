import { put } from 'redux-saga/effects'
import * as APIServices from '../../../server'
import { statsActions } from '../state/actions'

export function createGetStatsSaga(apiServices: APIServices.Services) {
    return function* getStatsSaga(
        action: ReturnType<typeof statsActions.getStats>
    ) {
        try {
            yield put(statsActions.setStats(
                'test',
                {
                    strength: 10,
                    charisma: 2,
                    wisdom: 14,
                    intelligence: 11,
                    constitution: 4,
                    dexterity: 21
                }
            ))
        } catch (e) {
            console.log(e)
        }
    }
}