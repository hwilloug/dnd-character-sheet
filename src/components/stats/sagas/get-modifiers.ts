import { put, select } from 'redux-saga/effects'
import { AppState } from '../../../app-store'
import { formatModifier } from '../../../utils/format-modifier'
import { statsActions } from '../state/actions'

export function createGetModifiersSaga() {
    return function* getModifiersSaga(
        action: ReturnType<typeof statsActions.getStatsModifiers>
    ) {
        try {

            const state: AppState = yield select()

            const stats = state.stats.abilityScores

            if (
                stats.strength &&
                stats.charisma &&
                stats.intelligence &&
                stats.wisdom &&
                stats.constitution &&
                stats.dexterity
            )
                yield put(statsActions.setStatsModifiers(
                    'test',
                    {
                        strengthModifier: calculateModifier(stats.strength),
                        charismaModifier: calculateModifier(stats.charisma),
                        intelligenceModifier: calculateModifier(stats.intelligence),
                        wisdomModifier: calculateModifier(stats.wisdom),
                        constitutionModifier: calculateModifier(stats.constitution),
                        dexterityModifier: calculateModifier(stats.dexterity)
                    }
                ))            

        } catch (e) {
            console.log(e)
        }
    }
}

function calculateModifier<StatModifierType>(value: number) {

    const modifier = Math.floor((value - 10)/2)

    return formatModifier(modifier) as unknown as StatModifierType
}