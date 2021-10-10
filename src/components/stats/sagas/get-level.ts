import { call, put, select } from 'redux-saga/effects'
import { AppState } from '../../../app-store'
import { statsActions } from '../state/actions'

export function createGetLevelSaga() {
    return function* getLevelSaga(
        action: ReturnType<typeof statsActions.getLevel>
    ) {
        try {

            const state: AppState = yield select()
            const currentExp = state.stats.level.experiencePoints

            if (currentExp !== undefined) {
                let level = 1
                let proficiencyBonus = '+2'
                if (currentExp >= 355000) {
                    level = 20
                    proficiencyBonus = '+6'
                }
                else if (currentExp >= 305000) {
                    level = 19
                    proficiencyBonus = '+6'
                }
                else if (currentExp >= 265000) {
                    level = 18
                    proficiencyBonus = '+6'
                }
                else if (currentExp >= 225000) {
                    level = 17
                    proficiencyBonus = '+6'
                }
                else if (currentExp >= 195000) {
                    level = 16
                    proficiencyBonus = '+5'
                }
                else if (currentExp >= 165000) {
                    level = 15
                    proficiencyBonus = '+5'
                }
                else if (currentExp >= 140000) {
                    level = 14
                    proficiencyBonus = '+5'
                }
                else if (currentExp >= 120000) {
                    level = 13
                    proficiencyBonus = '+5'
                }
                else if (currentExp >= 100000) {
                    level = 12
                    proficiencyBonus = '+4'
                }
                else if (currentExp >= 85000) {
                    level = 11
                    proficiencyBonus = '+4'
                }
                else if (currentExp >= 64000) {
                    level = 10
                    proficiencyBonus = '+4'
                }
                else if (currentExp >= 48000) {
                    level = 9
                }
                else if (currentExp >= 34000) {
                    level = 8
                    proficiencyBonus = '+3'
                }
                else if (currentExp >= 23000) {
                    level = 7
                    proficiencyBonus = '+3'
                }
                else if (currentExp >= 14000) {
                    level = 6
                    proficiencyBonus = '+3'
                }
                else if (currentExp >= 6500) {
                    level = 5
                    proficiencyBonus = '+3'
                }
                else if (currentExp >= 2700) {
                    level = 4
                    proficiencyBonus = '+2'
                }
                else if (currentExp >= 900) {
                    level = 3
                    proficiencyBonus = '+2'
                }
                else if (currentExp >= 300) {
                    level = 2
                    proficiencyBonus = '+2'
                }

                yield put(statsActions.setLevel(
                    action.payload.character_id,
                    level
                ))
            }

        } catch (e) {
            console.log(e)
        }
    }
}