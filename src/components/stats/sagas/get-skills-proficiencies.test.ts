import { expectSaga } from "redux-saga-test-plan"
import * as matchers from 'redux-saga-test-plan/matchers'
import { createAPIServices } from "../../../server"
import { GetSkillsProficienciesAPI } from "../../../server/character"
import { statsActions } from "../state/actions"
import { SkillsProficienciesObject } from "../state/state"
import { createGetSkillsProficienciesSaga } from "./get-skills-proficiencies"

const apiServices = createAPIServices()
const getSkillsProficienciesSaga = createGetSkillsProficienciesSaga(apiServices)

it('gets and sets skills proficiencies', () => {

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
        getSkillsProficienciesSaga,
        statsActions.getStats('asdf')
    )
        .provide([
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
        .run()
        .then((result) => {
            const { effects } = result
      
            expect(effects.put).toBe(undefined)
            expect(effects.call).toBe(undefined)
        })
})