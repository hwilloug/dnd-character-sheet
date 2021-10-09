import { statsReducer, initialState } from "./reducer"
import { statsActions } from "./actions"
import { StatsState } from "./state"

it('sets stats', () => {
    const newStats: StatsState = {
        strength: 4,
        wisdom: 3,
        charisma: 21,
        constitution: 5,
        dexterity: 6,
        intelligence: 13
    }
    const state = statsReducer(
        initialState,
        statsActions.setStats('asdf', newStats)
    )
    expect(state).toMatchObject(newStats)
})

it('sets stats modifiers', () => {
    const newStats: StatsState = {
        strengthModifier: '+1',
        wisdomModifier: '-3',
        charismaModifier: '+0',
        constitutionModifier: '+4',
        dexterityModifier: '-2',
        intelligenceModifier: '+3'
    }
    const state = statsReducer(
        initialState,
        statsActions.setStatsModifiers('asdf', newStats)
    )
    expect(state).toMatchObject({
        ...initialState,
        ...newStats
    })
})