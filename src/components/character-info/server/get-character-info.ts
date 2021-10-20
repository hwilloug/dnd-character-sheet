import {
  createResponse,
  ResponseTypes,
  UnknownServiceError
} from '../../../server/responses'
import { CharacterInfoState } from '../state/state'

export const SUCCESS = 'success'

const success = (
  response: CharacterInfoState
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
          characterName: "Lia Naïlo",
          class: "Monk",
          race: 'Elf',
          alignment: 'Lawful neutral',
          background: 'asdf',
          playerName: 'Hannah'
        }
      }

    } catch (e) {
      console.log(e)
      throw new UnknownServiceError()
    }
  }
}