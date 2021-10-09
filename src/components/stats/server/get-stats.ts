import axios, { AxiosResponse } from 'axios'
import {
    createResponse,
    ResponseTypes,
    UnknownServiceError
} from '../../../server/responses'

export const SUCCESS = 'success'

const success = (
    response: {
        strength?: number,
        dexterity?: number,
        constitution?: number,
        intelligence?: number,
        wisdom?: number,
        charisma?: number
    }
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
                {
                    strength?: number,
                    dexterity?: number,
                    constitution?: number,
                    intelligence?: number,
                    wisdom?: number,
                    charisma?: number
                }
            > = await axios({
                url: `/api/${character_id}/stats`,
                headers: {}
            })
            */

            return {
                body: {
                    strength: 11,
                    dexterity: 18,
                    constitution: 11,
                    intelligence: 8,
                    wisdom: 16,
                    charisma: 14
                }
            }

        } catch (e) {
            console.log(e)
            throw new UnknownServiceError()
        }
    }
}