import { call, put, select } from 'redux-saga/effects'
import { AppState } from '../../../app-store'
import * as APIServices from '../../../server'
import { GetSavingThrowProficienciesAPI } from '../../../server/character'
import { calculateModifier } from '../../../utils/calculate-modifier-with-proficiency'
import { statsActions } from '../state/actions'

export function createGetSavingThrowsSaga(apiServices: APIServices.Services) {
  return function* getSavingThrowsSaga(
    action: ReturnType<typeof statsActions.getSavingThrows>
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

      const state: AppState = yield select()

      const modifiers = state.stats.abilityScoresModifiers
      const proficiencies = response.body
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
