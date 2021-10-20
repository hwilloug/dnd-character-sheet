import { ActionsUnion, createAction } from "../../../state/action"
import { AbilityScoreModifiersObject, AbilityScoresObject, ProficiencyBonusType, SavingThrowsObject, SavingThrowsProficienciesObject, SkillsObject, SkillsProficienciesObject } from "./state"

export enum StatsActionTypes {
    GET_STATS = '[stats] get',
    SET_STATS = '[stats] set',
    GET_STATS_MODIFIERS = '[stats] get modifiers',
    SET_STATS_MODIFIERS = '[stats] set modifiers',
    GET_EXPERIENCE_POINTS = '[stats] get experience points',
    SET_EXPERIENCE_POINTS = '[stats] set experience points',
    GET_LEVEL = '[stats] get level',
    SET_LEVEL = '[stats] set level',
    GET_SKILLS = '[stats] get skills',
    SET_SKILLS = '[stats] set skills',
    GET_SKILLS_PROFICIENCIES = '[stats] get skills proficiencies',
    SET_SKILLS_PROFICIENCIES = '[stats] set skills proficiencies',
    GET_SAVING_THROWS = '[stats] get saving throws',
    SET_SAVING_THROWS = '[stats] set saving throws',
    GET_SAVING_THROW_PROFICIENCIES = '[stats] get saving throw proficiencies',
    SET_SAVING_THROW_PROFICIENCIES = '[stats] set saving throw proficiencies'
}

export const statsActions = {
  getStats: (character_id: string) => 
    createAction(StatsActionTypes.GET_STATS, {
      character_id
    }),
  setStats: (character_id: string, stats: AbilityScoresObject) => 
    createAction(StatsActionTypes.SET_STATS, {
      character_id,
      stats
    }),
  getStatsModifiers: () =>
    createAction(StatsActionTypes.GET_STATS_MODIFIERS, {}),
  setStatsModifiers: (character_id: string, stats_modifiers: AbilityScoreModifiersObject) =>
    createAction(StatsActionTypes.SET_STATS_MODIFIERS, {
      character_id,
      stats_modifiers
    }),
  getExperiencePoints: (character_id: string) => 
    createAction(StatsActionTypes.GET_EXPERIENCE_POINTS, {
      character_id
    }),
  setExperiencePoints: (character_id: string, experience_points: number) => 
    createAction(StatsActionTypes.SET_EXPERIENCE_POINTS, {
      character_id,
      experience_points
    }),
  getLevel: (character_id: string) => 
    createAction(StatsActionTypes.GET_LEVEL, {
      character_id
    }),
  setLevel: (character_id: string, level: number, proficiencyBonus: ProficiencyBonusType) => 
    createAction(StatsActionTypes.SET_LEVEL, {
      character_id,
      level,
      proficiencyBonus
    }),
  getSkills: (character_id: string) => 
    createAction(StatsActionTypes.GET_SKILLS, {
      character_id
    }),
  setSkills: (skills: SkillsObject) => 
    createAction(StatsActionTypes.SET_SKILLS, {
      skills
    }),
  getSkillsProficiencies: (character_id: string) => 
    createAction(StatsActionTypes.GET_SKILLS_PROFICIENCIES, {
      character_id
    }),
  setSkillsProficiencies: (skillsProficiencies: SkillsProficienciesObject) => 
    createAction(StatsActionTypes.SET_SKILLS_PROFICIENCIES, {
      skillsProficiencies
    }),
  getSavingThrows: (character_id: string) => 
    createAction(StatsActionTypes.GET_SAVING_THROWS, {
      character_id
    }),
  setSavingThrows: (savingThrows: SavingThrowsObject) => 
    createAction(StatsActionTypes.SET_SAVING_THROWS, {
      savingThrows
    }),
  getSavingThrowProficiencies: (character_id: string) => 
    createAction(StatsActionTypes.GET_SAVING_THROW_PROFICIENCIES, {
      character_id
    }),
  setSavingThrowProficiencies: (savingThrowProficiencies: SavingThrowsProficienciesObject) => 
    createAction(StatsActionTypes.SET_SAVING_THROW_PROFICIENCIES, {
      savingThrowProficiencies
    }),
}

export type StatsActions = ActionsUnion<typeof statsActions>