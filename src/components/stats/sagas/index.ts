import { takeLatest } from "@redux-saga/core/effects"
import * as APIServices from '../../../server'
import { createGetStatsSaga } from './get-stats'
import { StatsActionTypes } from "../state/actions"
import { createGetModifiersSaga } from "./get-modifiers"
import { createGetLevelSaga } from "./get-level"
import { createGetSkillsSaga } from "./get-skills"
import { createGetSavingThrowsSaga } from "./get-saving-throws"

export function createStatsSaga(apiServices: APIServices.Services) {
  const getStatsSaga = createGetStatsSaga(apiServices)
  const getModifiersSaga = createGetModifiersSaga()
  const getLevelSaga = createGetLevelSaga()
  const getSkillsSaga = createGetSkillsSaga(apiServices)
  const getSavingThrowsSaga = createGetSavingThrowsSaga(apiServices)

  return function* () {
    yield takeLatest(StatsActionTypes.GET_STATS, getStatsSaga)
    yield takeLatest(StatsActionTypes.GET_STATS_MODIFIERS, getModifiersSaga)
    yield takeLatest(StatsActionTypes.GET_LEVEL, getLevelSaga)
    yield takeLatest(StatsActionTypes.GET_SKILLS, getSkillsSaga)
    yield takeLatest(StatsActionTypes.GET_SAVING_THROWS, getSavingThrowsSaga)
  }
}