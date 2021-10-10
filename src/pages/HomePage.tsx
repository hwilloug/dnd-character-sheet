import React from 'react'
import { AppState } from '../app-store'
import { createCharacterInfoComponent } from '../components/character-info/CharacterInfo'
import { createAbilityScoreComponent } from '../components/stats/Stats'

export const HomePageComponent: React.FunctionComponent<{}> =
    () => {

        const AbilityScoreComponent = createAbilityScoreComponent<AppState>()
        const CharacterInfoComponent = createCharacterInfoComponent<AppState>()

        return (
            <div>
                <CharacterInfoComponent />
                <AbilityScoreComponent />
            </div>
        )
    }