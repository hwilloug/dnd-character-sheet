import { expectSaga } from "redux-saga-test-plan"
import { select } from "redux-saga/effects"
import { statsActions } from "../state/actions"
import { createGetSavingThrowsSaga } from "./get-saving-throws"
import { createAPIServices } from "../../../server"
import * as matchers from 'redux-saga-test-plan/matchers'
import { SavingThrowsProficienciesObject } from "../state/state"
import { GetSavingThrowProficienciesAPI } from "../../../server/character"

const apiServices = createAPIServices()
const getSavingThrowsSaga = createGetSavingThrowsSaga(apiServices)

it('gets and sets saving throw modifiers', () => {

  const newStats: SavingThrowsProficienciesObject = {
    strength: true,
    constitution: false,
    intelligence: false,
    charisma: false,
    dexterity: true,
    wisdom: false
  }

  return expectSaga(
    getSavingThrowsSaga,
    statsActions.getSavingThrows('asdf')
  )
    .provide([
      [select(), {
        stats: {
          abilityScoresModifiers: {
            strengthModifier: '+0',
            dexterityModifier: '+4',
            constitutionModifier: '+0',
            intelligenceModifier: '-1',
            wisdomModifier: '+3',
            charismaModifier: '+2'
          },
          level: {
            proficiencyBonus: '+2'
          }
        } 
      }],
      [
        matchers.call.fn(apiServices.getSavingThrowProficienciesAPI),
        GetSavingThrowProficienciesAPI.Responses.success(newStats)
      ]
    ])
    .call(
      apiServices.getSavingThrowProficienciesAPI,
      'asdf',
      'test-token'
    )
    .put(
      statsActions.setSavingThrowProficiencies(
        newStats
      )
    )
    .put(
      statsActions.setSavingThrows(
        {
          strength: '+2',
          constitution: '+0',
          intelligence: '-1',
          charisma: '+2',
          dexterity: '+6',
          wisdom: '+3'
        }
      )
    )
    .run()
})