import * as React from 'react'
import styled from '@emotion/styled'
import { FeaturesState } from './state/state'
import { connectRedux, FrameworkComponentProps } from '../../utils/connect'
import { featuresActions } from './state/actions'
import { useEffect } from 'react'

const FeaturesTable = styled.table`
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


export type FeaturesComponentType = FrameworkComponentProps<
    FeaturesState,
    typeof featuresActions,
    {}
>

export const FeaturesComponent: React.FunctionComponent<FeaturesComponentType> =
    ({state, actions}) => {

      useEffect(() => {
        actions.getFeatures('asdf')
      }, [])

      return (
        <FeaturesTable>
          <tbody>
            { state.map((feature) => (
              <tr>
                <td><b>{feature.name}</b></td>
                <td>{feature.description}</td>
              </tr>
            ))}
          </tbody>
        </FeaturesTable>
      )
    }

export function createFeaturesComponent<
    TState extends { features: FeaturesState }
>() {
  return connectRedux(
    FeaturesComponent,
    (state: TState) => state.features,
    featuresActions, 
  )
}

export type Features = ReturnType<typeof FeaturesComponent>