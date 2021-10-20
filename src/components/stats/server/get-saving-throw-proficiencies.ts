import {
  createResponse,
  ResponseTypes,
  UnknownServiceError
} from '../../../server/responses'
import { SavingThrowsProficienciesObject } from '../state/state'

export const SUCCESS = 'success'

const success = (response: SavingThrowsProficienciesObject) => createResponse(SUCCESS, response)

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
            const result: AxiosResponse<SavingThrowsProficienciesObject> = await axios({
                url: `/api/${character_id}/saving-throw-proficiencies`,
                headers: {}
            })
            */

      return {
        body: {
          strength: true,
          constitution: false,
          intelligence: false,
          charisma: false,
          dexterity: true,
          wisdom: false
        }
      }

    } catch (e) {
      console.log(e)
      throw new UnknownServiceError()
    }
  }
}