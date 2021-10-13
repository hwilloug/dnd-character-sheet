import { call, put } from 'redux-saga/effects'
import * as APIServices from '../../../server'
import { GetCharacterInfoAPI } from '../../../server/character'
import { characterInfoActions } from '../state/actions'

export function createGetCharacterInfoSaga(apiServices: APIServices.Services) {
    return function* getCharacterInfoSaga(
        action: ReturnType<typeof characterInfoActions.getCharacterInfo>
    ) {
        try {

            const response: GetCharacterInfoAPI.Responses = yield call(
                apiServices.getCharacterInfoAPI,
                action.payload.character_id,
                'test-token'
            )

            yield put(characterInfoActions.setCharacterInfo(
                action.payload.character_id,
                {
                    characterName: response.body.characterName,
                    class: response.body.class,
                    race: response.body.race,
                    alignment: response.body.alignment,
                    background: response.body.background,
                    playerName: response.body.playerName
                }
            ))

        } catch (e) {
            console.log(e)
        }
    }
}