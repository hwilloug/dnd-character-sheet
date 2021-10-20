import * as Character from './character'

export const createAPIServices = (token?: string) => {
  return {
    getStatsAPI: Character.GetStatsAPI.create(),
    getCharacterInfoAPI: Character.GetCharacterInfoAPI.create(),
    getSkillsProficienciesAPI: Character.GetSkillsProficienciesAPI.create(),
    getSavingThrowProficienciesAPI: Character.GetSavingThrowProficienciesAPI.create(),
    getFeaturesAPI: Character.GetFeaturesAPI.create()
  }
}

export type Services = ReturnType<typeof createAPIServices>