import {
  createResponse,
  ResponseTypes,
  UnknownServiceError
} from '../../../server/responses'
import { SkillsProficienciesObject } from '../state/state'

export const SUCCESS = 'success'

const success = (response: SkillsProficienciesObject) => createResponse(SUCCESS, response)

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
            const result: AxiosResponse<SkillsProficienciesObject> = await axios({
                url: `/api/${character_id}/skills-proficiencies`,
                headers: {}
            })
            */

      return {
        body: {
          acrobatics: true,
          animalHandling: false,
          arcana: false,
          athletics: false,
          deception: false,
          history: false,
          insight: true,
          intimidation: false,
          investigation: false,
          medicine: false,
          nature: false,
          perception: false,
          performance: false,
          persuasion: true,
          religion: true,
          sleightOfHand: false,
          stealth: false,
          survival: false
        }
      }

    } catch (e) {
      console.log(e)
      throw new UnknownServiceError()
    }
  }
}