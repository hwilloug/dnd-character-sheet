import * as Character from './character'

export const createAPIServices = (token?: string) => {
    return {
        getStatsAPI: Character.GetStatsAPI.create()
    }
}

export type Services = ReturnType<typeof createAPIServices>