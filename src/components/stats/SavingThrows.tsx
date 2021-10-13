import * as React from 'react'
import styled from '@emotion/styled'
import { StatsState } from './state/state'
import { connectRedux, FrameworkComponentProps } from '../../utils/connect'
import { statsActions } from './state/actions'
import { useEffect } from 'react'
import { capitalizeFirstLetter } from '../../utils/capitalize-first-letter'

const StatsTable = styled.table`
    border: 1px solid black;
    border-collapse: collapse;
    margin: 20px;
    & > tbody {    
        & > tr {
            & > td {
                border: 1px solid black;
                padding: 5px;
            }
        }
    }
`

export type SavingThrowComponentType = FrameworkComponentProps<
    StatsState,
    typeof statsActions,
    {}
>

export const SavingThrowComponent: React.FunctionComponent<SavingThrowComponentType> =
    ({state, actions}) => {

        return (
            <StatsTable>
                <tbody>
                {
                    Object.keys(state.abilityScores).map((ability: string) => {

                        {/* @ts-ignore */}
                        const weight = state.savingThrowsProficiencies[ability] ? 'bold' : 'normal'

                        return (
                            <tr 
                                style={{fontWeight: weight}}
                            >
                                {/* @ts-ignore */}
                                <td>{state.savingThrows[ability]}</td>
                                <td>{capitalizeFirstLetter(ability)}</td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </StatsTable>
        )
    }

export function createSavingThrowComponent<
    TState extends { stats: StatsState }
>() {
    return connectRedux(
        SavingThrowComponent,
        (state: TState) => state.stats,
        statsActions, 
    )
}

export type SavingThrows = ReturnType<typeof SavingThrowComponent>