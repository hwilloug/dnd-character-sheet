import { expectSaga } from "redux-saga-test-plan"
import * as matchers from 'redux-saga-test-plan/matchers'
import { createAPIServices } from "../../../server"
import { GetSavingThrowProficienciesAPI } from "../../../server/character"
import { statsActions } from "../state/actions"
import { SavingThrowsProficienciesObject } from "../state/state"
import { createGetSavingThrowProficienciesSaga } from "./get-saving-throw-proficiencies"

const apiServices = createAPIServices()
const getSavingThrowProficienciesSaga = createGetSavingThrowProficienciesSaga(apiServices)

it('gets and sets skills proficiencies', () => {

  const newStats: SavingThrowsProficienciesObject = {
    strength: true,
    constitution: false,
    intelligence: false,
    charisma: false,
    dexterity: true,
    wisdom: false
  }

  return expectSaga(
    getSavingThrowProficienciesSaga,
    statsActions.getSavingThrowProficiencies('asdf')
  )
    .provide([
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
    .run()
    .then((result) => {
      const { effects } = result
      
      expect(effects.put).toBe(undefined)
      expect(effects.call).toBe(undefined)
    })
})