import { characterInfoReducer, initialState } from "./reducer"
import { characterInfoActions } from "./actions"
import { CharacterInfoState } from "./state"

it('sets character info', () => {
  const newCharacterInfo: CharacterInfoState = {
    characterName: "Lia Naïlo",
    class: "Monk",
    race: 'Elf',
    alignment: 'Lawful neutral',
    background: 'asdf',
    playerName: 'Hannah',
    age: 337,
    eyes: 'Hazel',
    height: "5' 10\"",
    weight: '150 lb',
    skin: 'Caramel',
    hair: 'Caramel',
    personality: 'dfasdf',
    ideals: 'fjhgjh',
    bonds: 'adjkfjlsdkf',
    flaws: 'ogikjkn'
  }
  const state = characterInfoReducer(
    initialState,
    characterInfoActions.setCharacterInfo('asdf', newCharacterInfo)
  )
  expect(state).toMatchObject(newCharacterInfo)
})
