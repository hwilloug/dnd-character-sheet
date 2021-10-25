import * as React from 'react'
import styled from '@emotion/styled'
import { ItemsState } from './state/state'
import { connectRedux, FrameworkComponentProps } from '../../utils/connect'
import { itemsActions } from './state/actions'
import { useEffect } from 'react'

const ItemsTable = styled.table`
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


export type ItemsComponentType = FrameworkComponentProps<
    ItemsState,
    typeof itemsActions,
    {}
>

export const ItemsComponent: React.FunctionComponent<ItemsComponentType> =
    ({state, actions}) => {

      useEffect(() => {
        actions.getItems('asdf')
      }, [])

      return (
        <ItemsTable>
          <tbody>
            <tr>
              <td></td>
              <td>Item</td>
              <td>Description</td>
              <td>Notes</td>
            </tr>
            {console.log(Object.keys(state))}
            {Object.keys(state).map((item) => 
              <tr>
                <td>{state[item].number}</td>
                <td>{state[item].name}</td>
                <td>{state[item].description}</td>
                <td>{state[item].notes}</td>
              </tr>
            )}
          </tbody>
        </ItemsTable>
      )
    }

export function createItemsComponent<
    TState extends { items: ItemsState }
>() {
  return connectRedux(
    ItemsComponent,
    (state: TState) => state.items,
    itemsActions, 
  )
}

export type Items = ReturnType<typeof ItemsComponent>