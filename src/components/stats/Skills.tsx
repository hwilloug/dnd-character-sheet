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
                    <tr>
                        <td>{state.skills.acrobatics}</td>
                        <td>Acrobatics</td>
                    </tr>
                    <tr>
                        <td>{state.skills.animalHandling}</td>
                        <td>Animal Handling</td>
                    </tr>
                    <tr>
                        <td>{state.skills.arcana}</td>
                        <td>Arcana</td>
                    </tr>
                    <tr>
                        <td>{state.skills.athletics}</td>
                        <td>Athletics</td>
                    </tr>
                    <tr>
                        <td>{state.skills.deception}</td>
                        <td>Deception</td>
                    </tr>
                    <tr>
                        <td>{state.skills.history}</td>
                        <td>History</td>
                    </tr>
                    <tr>
                        <td>{state.skills.insight}</td>
                        <td>Insight</td>
                    </tr>
                    <tr>
                        <td>{state.skills.intimidation}</td>
                        <td>Intimidation</td>
                    </tr>
                    <tr>
                        <td>{state.skills.investigation}</td>
                        <td>Investigation</td>
                    </tr>
                    <tr>
                        <td>{state.skills.medicine}</td>
                        <td>Medicine</td>
                    </tr>
                    <tr>
                        <td>{state.skills.nature}</td>
                        <td>Nature</td>
                    </tr>
                    <tr>
                        <td>{state.skills.perception}</td>
                        <td>Perception</td>
                    </tr>
                    <tr>
                        <td>{state.skills.performance}</td>
                        <td>Performance</td>
                    </tr>
                    <tr>
                        <td>{state.skills.persuasion}</td>
                        <td>Persuasion</td>
                    </tr>
                    <tr>
                        <td>{state.skills.religion}</td>
                        <td>Religion</td>
                    </tr>
                    <tr>
                        <td>{state.skills.sleightOfHand}</td>
                        <td>Sleight of Hand</td>
                    </tr>
                    <tr>
                        <td>{state.skills.stealth}</td>
                        <td>Stealth</td>
                    </tr>
                    <tr>
                        <td>{state.skills.survival}</td>
                        <td>Survival</td>
                    </tr>
                </tbody>
            </StatsTable>
        )
    }

export function createSkillsComponent<
    TState extends { stats: StatsState }
>() {
    return connectRedux(
        SkillsComponent,
        (state: TState) => state .stats,
        statsActions, 
    )
}

export type Skills = ReturnType<typeof SkillsComponent>