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
          background: 'Guild Artisan',
          playerName: 'Hannah',
          age: 337,
          eyes: 'Hazel',
          height: "5' 10\"",
          weight: '150 lb',
          skin: 'Caramel',
          hair: 'Caramel',
          personality: 'I like to talk at length about my profession.',
          ideal: 'Beauty: What is beautiful points us beyond itself towards what is true.',
          bonds: "I created a great work for someone, and then found them unworthy to receive it. I'm still looking for someone worthy.",
          flaws: ""
        }
      }

    } catch (e) {
      console.log(e)
      throw new UnknownServiceError()
    }
  }
}