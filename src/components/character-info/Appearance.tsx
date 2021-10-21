import * as React from 'react'
import styled from '@emotion/styled'
import { CharacterInfoState } from './state/state'
import { connectRedux, FrameworkComponentProps } from '../../utils/connect'
import { characterInfoActions } from './state/actions'

const AppearanceTable = styled.table`
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


export type ApperanceComponentType = FrameworkComponentProps<
    CharacterInfoState,
    typeof characterInfoActions,
    {}
>

export const AppearanceComponent: React.FunctionComponent<ApperanceComponentType> =
    ({state, actions}) => {

      return (
        <AppearanceTable>
          <tbody>
            <tr>
              <td>Age</td>
              <td>{state.age}</td>
            </tr>
            <tr>
              <td>Height</td>
              <td>{state.height}</td>
            </tr>
            <tr>
              <td>Weight</td>
              <td>{state.weight}</td>
            </tr>
            <tr>
              <td>Eyes</td>
              <td>{state.eyes}</td>
            </tr>
            <tr>
              <td>Skin</td>
              <td>{state.skin}</td>
            </tr>
            <tr>
              <td>Hair</td>
              <td>{state.hair}</td>
            </tr>
          </tbody>
        </AppearanceTable>
      )
    }

export function createAppearanceComponent<
    TState extends { characterInfo: CharacterInfoState }
>() {
  return connectRedux(
    AppearanceComponent,
    (state: TState) => state.characterInfo,
    characterInfoActions, 
  )
}

export type Appearance = ReturnType<typeof AppearanceComponent>