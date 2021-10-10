import { characterInfoReducer, initialState } from "./reducer"
import { CharacterInfoActions, characterInfoActions } from "./actions"
import { CharacterInfoState } from "./state"

it('sets character info', () => {
    const newCharacterInfo: CharacterInfoState = {
        characterName: "Lia Naïlo",
        class: "Monk",
        race: 'Elf',
        alignment: 'Lawful neutral',
        background: 'asdf',
        playerName: 'Hannah',
        experiencePoints: 250,
        level: 1
    }
    const state = characterInfoReducer(
        initialState,
        characterInfoActions.setCharacterInfo('asdf', newCharacterInfo)
    )
    expect(state).toMatchObject(newCharacterInfo)
})

it('sets experience points', () => {
    const experiencePoints = 500
    const state = characterInfoReducer(
        initialState,
        characterInfoActions.setExperiencePoints('asdf', experiencePoints)
    )
    expect(state).toMatchObject({
        ...initialState,
        experiencePoints
    })
})

it('sets level', () => {
    const level = 500
    const state = characterInfoReducer(
        initialState,
        characterInfoActions.setLevel('asdf', level)
    )
    expect(state).toMatchObject({
        ...initialState,
        level
    })
})