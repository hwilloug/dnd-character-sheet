import * as React from 'react'
import styled from '@emotion/styled'
import { StatsState } from './state/state'
import { connectRedux, FrameworkComponentProps } from '../../utils/connect'
import { statsActions } from './state/actions'
import { useEffect } from 'react'

const StatsTable = styled.table`
    border: 1px solid black;
    border-collapse: collapse;
    & > tbody {    
        & > tr {
            & > td {
                border: 1px solid black;
                padding: 5px;
            }
        }
    }
`

export type AbilityScoreComponentType = FrameworkComponentProps<
    StatsState,
    typeof statsActions,
    {}
>

export const AbilityScoreComponent: React.FunctionComponent<AbilityScoreComponentType> =
    ({state, actions}) => {

        useEffect(() => {
            actions.getStats('asdf')
        }, [])

        return (
            <StatsTable>
                <tbody>
                    <tr>
                        <td>Strength</td>
                        <td>{state.abilityScores.strength}</td>
                        <td>{state.abilityScoresModifiers.strengthModifier}</td>
                    </tr>
                    <tr>
                        <td>Dexterity</td>
                        <td>{state.abilityScores.dexterity}</td>
                        <td>{state.abilityScoresModifiers.dexterityModifier}</td>
                    </tr>
                    <tr>
                        <td>Constitution</td>
                        <td>{state.abilityScores.constitution}</td>
                        <td>{state.abilityScoresModifiers.constitutionModifier}</td>
                    </tr>
                    <tr>
                        <td>Intelligence</td>
                        <td>{state.abilityScores.intelligence}</td>
                        <td>{state.abilityScoresModifiers.intelligenceModifier}</td>
                    </tr>
                    <tr>
                        <td>Wisdom</td>
                        <td>{state.abilityScores.wisdom}</td>
                        <td>{state.abilityScoresModifiers.wisdomModifier}</td>
                    </tr>
                    <tr>
                        <td>Charisma</td>
                        <td>{state.abilityScores.charisma}</td>
                        <td>{state.abilityScoresModifiers.charismaModifier}</td>
                    </tr>
                </tbody>
            </StatsTable>
        )
    }

export function createAbilityScoreComponent<
    TState extends { stats: StatsState }
>() {
    return connectRedux(
        AbilityScoreComponent,
        (state: TState) => state.stats,
        statsActions, 
    )
}

export type AbilityScore = ReturnType<typeof AbilityScoreComponent>