import { ActionsUnion, createAction } from "../../../state/action"
import { ItemsObject } from "./state"

export enum ItemsActionsType {
    GET_ITEMS = '[items] get',
    SET_ITEMS = '[items] set',
    DELETE_ITEM = '[items] delete'
}

export const itemsActions = {
  getItems: (character_id: string) => 
    createAction(ItemsActionsType.GET_ITEMS, {
      character_id
    }),
  setItems: (items: ItemsObject) => 
    createAction(ItemsActionsType.SET_ITEMS, {
      items
    }),
  deleteItem: (item: string) => 
    createAction(ItemsActionsType.DELETE_ITEM, {
      item
    })
}

export type ItemsActions = ActionsUnion<typeof itemsActions>