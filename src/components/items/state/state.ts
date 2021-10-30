import { DamageOptionsType } from "../../session/state/state"

export type ItemType = {
  name: string,
  description?: string,
  number: number,
  notes?: string,
  type?: string,
  unitCost?: string,
  unitWeight?: number,
  properties?: string[],
  range?: string,
  rarity?: string,
  damage?: string,
  damageType?: DamageOptionsType
  duration?: string
}

export type ItemsState = {
  items: ItemsObject,
  toolProficiencies: string[]
}

export type ItemsObject = {
  [id: string]: ItemType
}