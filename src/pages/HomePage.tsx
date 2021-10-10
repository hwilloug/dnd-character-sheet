import React from 'react'
import { AppState } from '../app-store'
import { createCharacterInfoComponent } from '../components/character-info/CharacterInfo'
import { createStatsComponent } from '../components/stats/Stats'

export const HomePageComponent: React.FunctionComponent<{}> =
    () => {

        const StatsComponent = createStatsComponent<AppState>()
        const CharacterInfoComponent = createCharacterInfoComponent<AppState>()

        return (
            <div>
                <CharacterInfoComponent />
                <StatsComponent />
            </div>
        )
    }