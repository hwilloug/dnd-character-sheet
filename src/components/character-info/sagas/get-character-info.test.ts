import { expectSaga } from "redux-saga-test-plan"
import * as matchers from 'redux-saga-test-plan/matchers'
import { createAPIServices } from "../../../server"
import { GetCharacterInfoAPI } from "../../../server/character"
import { characterInfoActions } from "../state/actions"
import { CharacterInfoState } from "../state/state"
import { createGetCharacterInfoSaga } from "./get-character-info"

const apiServices = createAPIServices()
const getCharacterInfoSaga = createGetCharacterInfoSaga(apiServices)

it('gets and sets character info', () => {

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
    hair: 'Caramel'
  }

  return expectSaga(
    getCharacterInfoSaga,
    characterInfoActions.getCharacterInfo('asdf')
  )
    .provide([
      [
        matchers.call.fn(apiServices.getCharacterInfoAPI),
        GetCharacterInfoAPI.Responses.success(newCharacterInfo)
      ]
    ])
    .call(
      apiServices.getCharacterInfoAPI,
      'asdf',
      'test-token'
    )
    .put(
      characterInfoActions.setCharacterInfo(
        'asdf',
        newCharacterInfo
      )
    )
    .run()
    .then((result) => {
      const { effects } = result
      
      expect(effects.put).toBe(undefined)
      expect(effects.call).toBe(undefined)
    })
})