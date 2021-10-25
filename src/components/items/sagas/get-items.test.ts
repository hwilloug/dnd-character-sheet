import { expectSaga } from "redux-saga-test-plan"
import * as matchers from 'redux-saga-test-plan/matchers'
import { createAPIServices } from "../../../server"
import { GetCharacterInfoAPI, GetItemsAPI } from "../../../server/character"
import { itemsActions } from "../state/actions"
import { ItemsState } from "../state/state"
import { createGetItemsSaga } from "./get-items"

const apiServices = createAPIServices()
const getItemsSaga = createGetItemsSaga(apiServices)

it('gets and sets items', () => {

  const newItems: ItemsState = {
    dagger: {
      name: 'Dagger',
      number: 10,
      description: 'asdf',
      notes: 'flgkjdflkjs',
      type: 'Simple Melee Weapon',
      unitCost: '2 gp',
      unitWeight: '1 lb',
      properties: [
        'Finesse', 
        'Light', 
        'Range', 
        'Thrown'
      ],
      range: '20/60',
      rarity: 'Standard',
      damage: '1d4'
    }
  }

  return expectSaga(
    getItemsSaga,
    itemsActions.getItems('asdf')
  )
    .provide([
      [
        matchers.call.fn(apiServices.GetItemsAPI),
        GetItemsAPI.Responses.success(newItems)
      ]
    ])
    .call(
      apiServices.GetItemsAPI,
      'asdf',
      'test-token'
    )
    .put(
      itemsActions.setItems(
        newItems
      )
    )
    .run()
    .then((result) => {
      const { effects } = result
      
      expect(effects.put).toBe(undefined)
      expect(effects.call).toBe(undefined)
    })
})