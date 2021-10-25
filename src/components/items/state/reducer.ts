import { ItemsActions, ItemsActionsType } from "./actions";
import { ItemsState } from "./state";

export const initialState: ItemsState = {}

export function itemsReducer(
  previousState: ItemsState | undefined,
  action: ItemsActions
): ItemsState {
  const state = previousState || initialState

  switch (action.type) {
  case ItemsActionsType.SET_ITEMS:
    return {
      ...state,
      ...action.payload.items
    }
  case ItemsActionsType.DELETE_ITEM:
    let newState = Object.assign({}, state)
    delete state[action.payload.item]
    return newState
  default: 
    return state
  }
}