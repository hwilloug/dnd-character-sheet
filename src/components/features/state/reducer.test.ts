import { featuresReducer, initialState } from "./reducer"
import { featuresActions } from "./actions"
import { FeaturesState } from "./state"

it('sets features', () => {
  const newFeatures: FeaturesState = [
    {
      name: "Darkvision",
      description: "asdftesting asldkjfk djklfja;lk "
    },
    {
      name: "Keen Senses",
      description: "alsdkfjlk kdjf al;ksdjf;klas djf;lk"
    }
  ]

  const state = featuresReducer(
    initialState,
    featuresActions.setFeatures(newFeatures)
  )
  expect(state).toMatchObject(newFeatures)
})
