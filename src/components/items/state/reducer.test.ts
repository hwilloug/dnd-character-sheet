import { itemsReducer, initialState } from "./reducer"
import { itemsActions } from "./actions"
import { ItemsState } from "./state"

it('sets items', () => {
  const newItems: ItemsState = {
    dagger: {
      name: 'Dagger',
      number: 1,
      description: '',
      notes: '',
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
    },
    darts: {
      name: 'Darts',
      number: 10
    }
  }
  const state = itemsReducer(
    initialState,
    itemsActions.setItems(newItems)
  )
  expect(state).toMatchObject(newItems)
})

it('sets items with already existing items', () => {
  const initialStateWithValues: ItemsState = {
    dagger: {
      name: 'Dagger',
      number: 1,
      description: '',
      notes: '',
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
    },
    darts: {
      name: 'Darts',
      number: 10
    }
  }

  const newItems = {
    darts: {
      name: 'Darts',
      number: 5,
      notes: 'These are my darts'
    },
    explorers_pack: {
      name: "Explorer's Pack",
      number: 1,
      description: "Backpack,bedroll,mess kit,tinderbox,torch (10),rations (10),waterskin,hempen rope"
    }
  }

  const state = itemsReducer(
    initialStateWithValues,
    itemsActions.setItems(newItems)
  )
  expect(state).toMatchObject({
    dagger: {
      name: 'Dagger',
      number: 1,
      description: '',
      notes: '',
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
    },
    darts: {
      name: 'Darts',
      number: 5,
      notes: 'These are my darts'
    },
    explorers_pack: {
      name: "Explorer's Pack",
      number: 1,
      description: "Backpack,bedroll,mess kit,tinderbox,torch (10),rations (10),waterskin,hempen rope"
    }
  })
})

it('deletes an item', () => {
  const initialStateWithValues: ItemsState = {
    dagger: {
      name: 'Dagger',
      number: 1,
      description: '',
      notes: '',
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
    },
    darts: {
      name: 'Darts',
      number: 10
    }
  }
  const state = itemsReducer(
    initialStateWithValues,
    itemsActions.deleteItem('darts')
  )
  expect(state).toMatchObject({
    dagger: {
      name: 'Dagger',
      number: 1,
      description: '',
      notes: '',
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
  })
})