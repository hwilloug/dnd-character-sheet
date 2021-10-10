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
        playerName: 'Hannah'
    }
    const state = characterInfoReducer(
        initialState,
        characterInfoActions.setCharacterInfo('asdf', newCharacterInfo)
    )
    expect(state).toMatchObject(newCharacterInfo)
})
