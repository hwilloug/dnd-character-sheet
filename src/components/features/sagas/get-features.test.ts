import { expectSaga } from "redux-saga-test-plan"
import * as matchers from 'redux-saga-test-plan/matchers'
import { createAPIServices } from "../../../server"
import { GetFeaturesAPI } from "../../../server/character"
import { featuresActions } from "../state/actions"
import { FeaturesState } from "../state/state"
import { createGetFeaturesSaga } from "./get-features"

const apiServices = createAPIServices()
const getFeaturesSaga = createGetFeaturesSaga(apiServices)

it('gets and sets features', () => {

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

  return expectSaga(
    getFeaturesSaga,
    featuresActions.getFeatures('asdf')
  )
    .provide([
      [
        matchers.call.fn(apiServices.getFeaturesAPI),
        GetFeaturesAPI.Responses.success(newFeatures)
      ]
    ])
    .call(
      apiServices.getFeaturesAPI,
      'asdf',
      'test-token'
    )
    .put(
      featuresActions.setFeatures(
        newFeatures
      )
    )
    .run()
    .then((result) => {
      const { effects } = result
      
      expect(effects.put).toBe(undefined)
      expect(effects.call).toBe(undefined)
    })
})