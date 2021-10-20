import * as React from 'react'
import styled from '@emotion/styled'
import { CharacterInfoState } from './state/state'
import { connectRedux, FrameworkComponentProps } from '../../utils/connect'
import { characterInfoActions } from './state/actions'
import { useEffect } from 'react'

const CharacterInfoTable = styled.table`
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


export type CharacterComponentType = FrameworkComponentProps<
    CharacterInfoState,
    typeof characterInfoActions,
    {}
>

export const CharacterInfoComponent: React.FunctionComponent<CharacterComponentType> =
    ({state, actions}) => {

      useEffect(() => {
        actions.getCharacterInfo('asdf')
      }, [])

      return (
        <CharacterInfoTable>
          <tbody>
            <tr>
              <td>Character Name</td>
              <td>Class</td>
              <td>Race</td>
              <td>Background</td>
              <td>Alignment</td>
              <td>Player Name</td>
            </tr>
            <tr>
              <td>{state.characterName}</td>
              <td>{state.class}</td>
              <td>{state.race}</td>
              <td>{state.background}</td>
              <td>{state.alignment}</td>
              <td>{state.playerName}</td>
            </tr>
          </tbody>
        </CharacterInfoTable>
      )
    }

export function createCharacterInfoComponent<
    TState extends { characterInfo: CharacterInfoState }
>() {
  return connectRedux(
    CharacterInfoComponent,
    (state: TState) => state.characterInfo,
    characterInfoActions, 
  )
}

export type CharacterInfo = ReturnType<typeof CharacterInfoComponent>