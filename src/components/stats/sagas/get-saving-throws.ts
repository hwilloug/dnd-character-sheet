import { put, select } from 'redux-saga/effects'
import { AppState } from '../../../app-store'
import { calculateModifier } from '../../../utils/calculate-modifier-with-proficiency'
import { statsActions } from '../state/actions'

export function createGetSavingThrowsSaga() {
    return function* getSavingThrowsSaga(
        action: ReturnType<typeof statsActions.getSavingThrows>
    ) {
        try {

            yield put(statsActions.getSavingThrowProficiencies(action.payload.character_id))

            const state: AppState = yield select()

            const modifiers = state.stats.abilityScoresModifiers
            const proficiencies = state.stats.savingThrowsProficiencies
            const proficiencyBonus = state.stats.level.proficiencyBonus

            if (
                modifiers.strengthModifier &&
                modifiers.charismaModifier &&
                modifiers.intelligenceModifier &&
                modifiers.wisdomModifier &&
                modifiers.constitutionModifier &&
                modifiers.dexterityModifier
            )
                yield put(statsActions.setSavingThrows(
                    {
                        strength: calculateModifier(modifiers.strengthModifier, proficiencies.strength, proficiencyBonus),
                        constitution: calculateModifier(modifiers.constitutionModifier, proficiencies.constitution, proficiencyBonus),
                        intelligence: calculateModifier(modifiers.intelligenceModifier, proficiencies.intelligence, proficiencyBonus),
                        charisma: calculateModifier(modifiers.charismaModifier, proficiencies.charisma, proficiencyBonus),
                        dexterity: calculateModifier(modifiers.dexterityModifier, proficiencies.dexterity, proficiencyBonus),
                        wisdom: calculateModifier(modifiers.wisdomModifier, proficiencies.wisdom, proficiencyBonus)
                    }
                ))     

        } catch (e) {
            console.log(e)
        }
    }
}
