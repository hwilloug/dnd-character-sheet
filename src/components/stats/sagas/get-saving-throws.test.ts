import { expectSaga } from "redux-saga-test-plan"
import { select } from "redux-saga/effects"
import { statsActions } from "../state/actions"
import { createGetSavingThrowsSaga } from "./get-saving-throws"

const getSavingThrowsSaga = createGetSavingThrowsSaga()

it('gets and sets saving throw modifiers', () => {
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
          savingThrowsProficiencies: {
            strength: true,
            constitution: false,
            intelligence: false,
            charisma: false,
            dexterity: true,
            wisdom: false
          },
          level: {
            proficiencyBonus: '+2'
          }
        } 
      }]
    ])
    .put(statsActions.getSavingThrowProficiencies('asdf'))
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