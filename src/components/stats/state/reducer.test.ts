import { statsReducer, initialState } from "./reducer"
import { statsActions } from "./actions"
import { AbilityScoreModifiersObject, AbilityScoresObject, StatsState } from "./state"

it('sets stats', () => {
    const newStats: AbilityScoresObject = {
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
    expect(state).toMatchObject({
        ...initialState,
        abilityScores: newStats
    })
})

it('sets stats modifiers', () => {
    const newStats: AbilityScoreModifiersObject = {
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
        abilityScoresModifiers: newStats
    })
})

it('sets experience points', () => {
    const experiencePoints = 500
    const state = statsReducer(
        initialState,
        statsActions.setExperiencePoints('asdf', experiencePoints)
    )
    expect(state).toMatchObject({
        ...initialState,
        level: {
            ...initialState.level,
            experiencePoints
        }
    })
})

it('sets level', () => {
    const level = 500
    const state = statsReducer(
        initialState,
        statsActions.setLevel('asdf', level)
    )
    expect(state).toMatchObject({
        ...initialState,
        level: {
            ...initialState.level,
            level
        }
    })
})