import {
  createResponse,
  ResponseTypes,
  UnknownServiceError
} from '../../../server/responses'
import { FeaturesState } from '../state/state'

export const SUCCESS = 'success'

const success = (
  response: FeaturesState
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
        body: [
          {
            name: 'Darkvision',
            description: "You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of grey."
          },
          {
            name: 'Keen senses',
            description: 'You have proficiency in the Perception skill.'
          },
          {
            name: 'Fey Ancestry',
            description: "You have advantage on saving throws agains being charmed, and magic can't put you to sleep."
          },
          {
            name: 'Trance',
            description: "Elves don't need to sleep. Instead, they meditate deeply, remaining semiconscious, for 4 hours a day. (The Common word for such meditation is 'trance') While meditating, you can dream after a fashion; such dreams are actually mental exercises that have become reflexive through years of practice. After resting in this way, you gain the same benefit that a human does from 8 hours of sleep."
          },
          {
            name: 'Mask of the Wild',
            description: 'You can attempt to hide even when you are only lightly obscured by foliage, heavy rain, falling snow, mist, and other natural phenomena.'
          },
          {
            name: 'Unarmored Defence',
            description: 'Beginning at 1st level, while you are wearing no armor and not wielding a shield, your AC equals 10+ your Dexterity modifier plus your Wisdom modifier.'
          },
          {
            name: 'Martial Arts',
            description: "At 1st level, your practice of martial arts gives you mastery of combat styles that use unarmed strikes and monk weapons, which are shortswords and any simple melee weapons that don't have the two-handed or heavy property.<br>You gain the following benefits while you are unarmed or wielding only monk weapons and you aren't wearing armor or wielding a shield: <ul><li>You can use Dexterity instead of Strength for the attack and damage rolls of your unarmed strikes and monk weapons.</li><li>You can roll a d4 in place of the normal damage of your unarmed strike or monk weapon. This die changes as you gain monk levels.</li><li>When you use the Attack action with an unarmed strike or monk weapon on your turn, you can make one unarmed strike as a bonus action.</li></ul>"
          }
        ]
      }

    } catch (e) {
      console.log(e)
      throw new UnknownServiceError()
    }
  }
}