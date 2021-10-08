import * as React from 'react'
import styled from '@emotion/styled'
import { StatsState } from './state/state'
import { FrameworkComponentProps } from '../../utils/connect'
import { statsActions } from './state/actions'

export type StatsComponentType = FrameworkComponentProps<
    StatsState,
    typeof statsActions,
    {}
>

export const StatsComponent: React.FunctionComponent<StatsComponentType> =
    ({state, actions}) => {
        return (
            <div>

            </div>
        )
    }