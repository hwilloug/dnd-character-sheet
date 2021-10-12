import * as React from 'react'
import styled from '@emotion/styled'
import { StatsState } from './state/state'
import { connectRedux, FrameworkComponentProps } from '../../utils/connect'
import { statsActions } from './state/actions'
import { capitalizeFirstLetter } from '../../utils/capitalize-first-letter'
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

export type SkillsComponentType = FrameworkComponentProps<
    StatsState,
    typeof statsActions,
    {}
>

export const SkillsComponent: React.FunctionComponent<SkillsComponentType> =
    ({state, actions}) => {

        return (
            <StatsTable>
                <tbody>
                    {
                        Object.keys(state.skills).map((skill: string) => {

                            {/* @ts-ignore */}
                            const weight = state.skillsProficiencies[skill] ? 'bold' : 'normal'

                            return (
                                <tr 
                                    style={{fontWeight: weight}}
                                >
                                    {/* @ts-ignore */}
                                    <td>{state.skills[skill]}</td>
                                    <td>{capitalizeFirstLetter(skill)}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </StatsTable>
        )
    }

export function createSkillsComponent<
    TState extends { stats: StatsState }
>() {
    return connectRedux(
        SkillsComponent,
        (state: TState) => state.stats,
        statsActions, 
    )
}

export type Skills = ReturnType<typeof SkillsComponent>