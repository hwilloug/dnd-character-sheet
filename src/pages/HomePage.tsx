import React from 'react'
import { AppState } from '../app-store'
import { createStatsComponent, StatsComponent } from '../components/stats/Stats'

export const HomePageComponent: React.FunctionComponent<{}> =
    () => {

        const StatsComponent = createStatsComponent<AppState>()

        return (
            <div>
                <StatsComponent />
            </div>
        )
    }