import { expectSaga } from "redux-saga-test-plan"
import * as matchers from 'redux-saga-test-plan/matchers'
import { createAPIServices } from "../../../server"
import { GetStatsAPI } from "../../../server/character"
import { statsActions } from "../state/actions"
import { StatsState } from "../state/state"
import { createGetStatsSaga } from "./get-stats"

const apiServices = createAPIServices()
const getStatsSaga = createGetStatsSaga(apiServices)

it('gets and sets stats modifiers', () => {

    const newStats: StatsState = {
        strength: 3,
        charisma: 1,
        intelligence: 13,
        wisdom: 14,
        constitution: 21,
        dexterity: 19
    }

    return expectSaga(
        getStatsSaga,
        statsActions.getStats('asdf')
    )
        .provide([
            [
                matchers.call.fn(apiServices.getStatsAPI),
                GetStatsAPI.Responses.success(newStats)
            ]
        ])
        .call(
            apiServices.getStatsAPI,
            'asdf',
            'test-token'
        )
        .put(
            statsActions.setStats(
                'asdf',
                newStats
            )
        )
        .put(statsActions.getStatsModifiers())
        .run()
        .then((result) => {
            const { effects } = result
      
            expect(effects.put).toBe(undefined)
            expect(effects.call).toBe(undefined)
        })
})