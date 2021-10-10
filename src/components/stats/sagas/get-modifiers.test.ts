import { expectSaga } from "redux-saga-test-plan"
import { select } from "redux-saga/effects"
import { statsActions } from "../state/actions"
import { createGetModifiersSaga } from "./get-modifiers"

const getModifiersSaga = createGetModifiersSaga()

it('gets and sets stats modifiers', () => {
    return expectSaga(
        getModifiersSaga,
        statsActions.getStatsModifiers()
    )
        .provide([
            [select(), {
                stats: {
                    abilityScores: {
                        strength: 11,
                        dexterity: 18,
                        constitution: 30,
                        intelligence: 8,
                        wisdom: 16,
                        charisma: 1
                    }
                } 
            }]
        ])
        .put(
            statsActions.setStatsModifiers(
                'test',
                {
                    strengthModifier: '+0',
                    dexterityModifier: '+4',
                    constitutionModifier: '+10',
                    intelligenceModifier: '-1',
                    wisdomModifier: '+3',
                    charismaModifier: '-5'
                }
            )
        )
        .run()
})