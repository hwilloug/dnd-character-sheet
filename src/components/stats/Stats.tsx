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


export type StatsComponentType = FrameworkComponentProps<
    StatsState,
    typeof statsActions,
    {}
>

export const StatsComponent: React.FunctionComponent<StatsComponentType> =
    ({state, actions}) => {

        useEffect(() => {
            actions.getStats('asdf')
        }, [])

        return (
            <StatsTable>
                <tbody>
                    <tr>
                        <td>Strength</td>
                        <td>{state.strength}</td>
                        <td>{state.strengthModifier}</td>
                    </tr>
                    <tr>
                        <td>Dexterity</td>
                        <td>{state.dexterity}</td>
                        <td>{state.dexterityModifier}</td>
                    </tr>
                    <tr>
                        <td>Constitution</td>
                        <td>{state.constitution}</td>
                        <td>{state.constitutionModifier}</td>
                    </tr>
                    <tr>
                        <td>Intelligence</td>
                        <td>{state.intelligence}</td>
                        <td>{state.intelligenceModifier}</td>
                    </tr>
                    <tr>
                        <td>Wisdom</td>
                        <td>{state.wisdom}</td>
                        <td>{state.wisdomModifier}</td>
                    </tr>
                    <tr>
                        <td>Charisma</td>
                        <td>{state.charisma}</td>
                        <td>{state.charismaModifier}</td>
                    </tr>
                </tbody>
            </StatsTable>
        )
    }

export function createStatsComponent<
    TState extends { stats: StatsState }
>() {
    return connectRedux(
        StatsComponent,
        (state: TState) => state.stats,
        statsActions, 
    )
}

export type Stats = ReturnType<typeof StatsComponent>