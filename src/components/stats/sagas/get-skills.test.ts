import { expectSaga } from "redux-saga-test-plan"
import { select } from "redux-saga/effects"
import { statsActions } from "../state/actions"
import { createGetSkillsSaga } from "./get-skills"
import { createAPIServices } from "../../../server"
import { SkillsProficienciesObject } from "../state/state"
import * as matchers from 'redux-saga-test-plan/matchers'
import { GetSkillsProficienciesAPI } from "../../../server/character"

const apiServices = createAPIServices()
const getSkillsSaga = createGetSkillsSaga(apiServices)

it('gets and sets skills modifiers', () => {

  const newStats: SkillsProficienciesObject = {
    acrobatics: true,
    animalHandling: false,
    arcana: false,
    athletics: false,
    deception: false,
    history: false,
    insight: false,
    intimidation: false,
    investigation: false,
    medicine: false,
    nature: false,
    perception: false,
    performance: false,
    persuasion: false,
    religion: true,
    sleightOfHand: false,
    stealth: false,
    survival: false
  }

  return expectSaga(
    getSkillsSaga,
    statsActions.getSkills('asdf')
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
        matchers.call.fn(apiServices.getSkillsProficienciesAPI),
        GetSkillsProficienciesAPI.Responses.success(newStats)
      ]
    ])
    .call(
      apiServices.getSkillsProficienciesAPI,
      'asdf',
      'test-token'
    )
    .put(
      statsActions.setSkillsProficiencies(
        newStats
      )
    )
    .put(
      statsActions.setSkills(
        {        
          acrobatics: '+6',
          animalHandling: '+3',
          arcana: '-1',
          athletics: '+0',
          deception: '+2',
          history: '-1',
          insight: '+3',
          intimidation: '+2',
          investigation: '-1',
          medicine: '+3',
          nature: '-1',
          perception: '+3',
          performance: '+2',
          persuasion: '+2',
          religion: '+1',
          sleightOfHand: '+4',
          stealth: '+4',
          survival: '+3'
        }
      )
    )
    .run()
})