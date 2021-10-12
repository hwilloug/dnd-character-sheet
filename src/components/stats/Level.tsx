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


export type LevelComponentType = FrameworkComponentProps<
    StatsState,
    typeof statsActions,
    {}
>

export const LevelComponent: React.FunctionComponent<LevelComponentType> =
    ({state, actions}) => {

        return (
            <StatsTable>
                <tbody>
                    <tr>
                        <td>Level</td>
                        <td>{state.level.level}</td>
                    </tr>
                    <tr>
                        <td>Experience Points</td>
                        <td>{state.level.experiencePoints}</td>
                    </tr>
                    <tr>
                        <td>Proficiency Bonus</td>
                        <td>{state.level.proficiencyBonus}</td>
                    </tr>
                </tbody>
            </StatsTable>
        )
    }

export function createLevelComponent<
    TState extends { stats: StatsState }
>() {
    return connectRedux(
        LevelComponent,
        (state: TState) => state.stats,
        statsActions, 
    )
}

export type Level = ReturnType<typeof LevelComponent>