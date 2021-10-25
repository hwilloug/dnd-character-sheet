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

export const DamageTypeOptions = [
  'acid', 
  'bludgeoning', 
  'cold', 
  'fire', 
  'force', 
  'lightning', 
  'necrotic', 
  'piercing', 
  'poison', 
  'psychic', 
  'radiant', 
  'slashing',
  'thunder'
] as const
type AllDamageTypeOptions = typeof DamageTypeOptions
export type DamageOptionsType = AllDamageTypeOptions[number]

export type ItemsState = {
  [id: string]: ItemType
}