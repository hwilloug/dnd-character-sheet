export type SessionObject = {
    weaponProficiencies: WeaponProficienciesObject,
    armorClass: number,
    initiative: number,
    speed: string,
    maximumHP: number,
    currentHP: number,
    temporaryHP: number,
    deathSaveSuccess: DeathSaveObject,
    deathSaveFailure: DeathSaveObject,
    hitDice: {
        [key: string]: boolean
    },
    maxiummAbilityPoints: number,
    currentAbilityPoints: number,
    abilitySaveDC: number,
    attacks: {
        damage?: string,
        damageType?: DamageOptionsType
        duration?: string
    }
}

export type WeaponProficienciesObject = {
    'Simple Melee Weapon'?: boolean,
    'Simple Ranged Weapon'?: boolean,
    'Martial Melee Weapon'?: boolean,
    'Martial Ranged Weapon'?: boolean,
    'Shortsword'?: boolean
}

export type DeathSaveObject = {
    '1': boolean,
    '2': boolean,
    '3': boolean
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