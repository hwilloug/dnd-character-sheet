import { ActionsUnion, createAction } from "../../../state/action"
import { FeaturesState } from "./state"

export enum FeaturesActionsTypes {
    GET_FEATURES = '[features] get',
    SET_FEATURES = '[features] set'
}

export const featuresActions = {
  getFeatures: (character_id: string) => 
    createAction(FeaturesActionsTypes.GET_FEATURES, {
      character_id
    }),
  setFeatures: (features: FeaturesState) => 
    createAction(FeaturesActionsTypes.SET_FEATURES, {
      features: features
    })
}

export type FeaturesActions = ActionsUnion<typeof featuresActions>