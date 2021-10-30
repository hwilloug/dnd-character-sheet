import {
  createResponse,
  ResponseTypes,
  UnknownServiceError
} from '../../../server/responses'
import { ItemsObject } from '../state/state'

export const SUCCESS = 'success'

const success = (
  response: ItemsObject
) => createResponse(SUCCESS, response)

export const Responses = {
  success
}
export type Responses = ResponseTypes<typeof Responses>

export function create() {
  return async function service(
    character_id: string,
    token: string
  ) {
    try {

      /* TODO
            const result: AxiosResponse<
                CharacterInfoState
            > = await axios({
                url: `/api/${character_id}/info`,
                headers: {}
            })
            */

      return {
        body: {
          dagger: {
            name: 'Dagger',
            number: 1,
            description: '',
            notes: '',
            type: 'Simple Melee Weapon',
            unitCost: '2 gp',
            unitWeight: 1,
            properties: [
              'Finesse', 
              'Light', 
              'Range', 
              'Thrown'
            ],
            range: '20/60',
            rarity: 'Standard',
            damage: '1d4',
            damageType: 'piercing'
          },
          darts: {
            name: 'Darts',
            number: 10,
            description: '',
            notes: '',
            type: 'Simple Ranged Weapon',
            unitCost: '5 cp',
            unitWeight: 0.25,
            properties: [
              'Finesse',
              'Thrown'
            ],
            range: '20/60',
            rarity: 'Standard',
            damage: '1d4',
            damageType: 'piercing'
          },
          backpack: {
            name: 'Backpack',
            number: 1,
            description: "A backpack can hold one cubic foot or 30 pounds of gear. You can also strap items, such as a Bedroll or a coil of rope, to the outside of a backpack.",
            rarity: 'Standard',
            notes: '',
            type: 'Adventuring Gear (container)',
            unitWeight: 5
          },
          bedroll: {
            name: 'Bedroll',
            number: 1,
            description: '',
            notes: '',
            rarity: 'Standard',
            type: 'Adventuring Gear',
            unitWeight: 7
          },
          mess_kit: {
            name: 'Mess Kit',
            number: 1,
            description: "This tin box contains a cup and simple cutlery. The box clamps together, and one side can be used as a cooking pan and the other as a plate or shallow bowl.",
            notes: '',
            rarity: 'Standard',
            type: 'Adventuring Gear',
            unitWeight: 1
          },
          tinder_box: {
            name: 'Tinder Box',
            number: 1,
            description: "This small container holds flint, fire steel, and tinder (usually dry cloth soaked in light oil) used to kindle a fire. Using it to light a torch - or anything else with abundant, exposed fuel - takes an action. Lighting any other fire takes 1 minute.",
            notes: '',
            rarity: 'Standard',
            type: 'Adventuring Gear',
            unitWeight: 1
          },
          torch: {
            name: 'Torch',
            number: 10,
            description: "A torch burns for 1 hour, providing bright light in a 20-foot radius and dim light for an additional 20 feet. If you make a melee Attack with a burning torch and hit, it deals 1 fire damage.",
            notes: '',
            type: 'Adventuring Gear',
            unitWeight: 1,
            damage: '1',
            rarity: 'Standard',
            damageType: 'fire',
            duration: '1 hour',
            range: '20/40'
          },
          rations: {
            name: 'Rations',
            number: 10,
            description: "Rations consist of dry foods suitable for extended travel, including jerky, dried fruit, hardtack, and nuts.",
            notes: '',
            rarity: 'Standard',
            type: 'Adventuring Gear',
            unitWeight: 2
          },
          waterskin: {
            name: 'Waterskin',
            number: 1,
            description: "A waterskin can hold up to 4 pints of liquid.",
            notes: '',
            rarity: 'Standard',
            type: 'Adventuring Gear',
            unitWeight: 5
          },
          hempen_rope: {
            name: 'Hempen Rope',
            number: 1,
            description: "Rope, whether made of hemp or silk, has 2 Hit Points and can be burst with a DC 17 Strength check.",
            notes: '50 feet',
            rarity: 'Standard',
            type: 'Adventuring Gear',
            unitWeight: 10
          },
        }
      }

    } catch (e) {
      console.log(e)
      throw new UnknownServiceError()
    }
  }
}