import { FeaturesActions, FeaturesActionsTypes } from "./actions";
import { FeaturesState } from "./state";

export const initialState: FeaturesState = []

export function featuresReducer(
  previousState: FeaturesState | undefined,
  action: FeaturesActions
): FeaturesState {
  const state = previousState || initialState

  switch (action.type) {
  case FeaturesActionsTypes.SET_FEATURES:
    return [
      ...action.payload.features
    ]
  default: 
    return state
  }
}