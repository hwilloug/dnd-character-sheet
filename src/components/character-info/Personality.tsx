import * as React from 'react'
import styled from '@emotion/styled'
import { CharacterInfoState } from './state/state'
import { connectRedux, FrameworkComponentProps } from '../../utils/connect'
import { characterInfoActions } from './state/actions'

const PersonalityTable = styled.table`
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


export type PersonalityComponentType = FrameworkComponentProps<
    CharacterInfoState,
    typeof characterInfoActions,
    {}
>

export const PersonalityComponent: React.FunctionComponent<PersonalityComponentType> =
    ({state, actions}) => {

      return (
        <PersonalityTable>
          <tbody>
            <tr>
              <td>Personality Traits</td>
              <td>{state.personality}</td>
            </tr>
            <tr>
              <td>Ideals</td>
              <td>{state.ideals}</td>
            </tr>
            <tr>
              <td>Bonds</td>
              <td>{state.bonds}</td>
            </tr>
            <tr>
              <td>Flaws</td>
              <td>{state.flaws}</td>
            </tr>
          </tbody>
        </PersonalityTable>
      )
    }

export function createPersonalityComponent<
    TState extends { characterInfo: CharacterInfoState }
>() {
  return connectRedux(
    PersonalityComponent,
    (state: TState) => state.characterInfo,
    characterInfoActions, 
  )
}

export type Personality = ReturnType<typeof PersonalityComponent>