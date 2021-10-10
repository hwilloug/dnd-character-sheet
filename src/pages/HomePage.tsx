import React from 'react'
import { AppState } from '../app-store'
import { createCharacterInfoComponent } from '../components/character-info/CharacterInfo'
import { createAbilityScoreComponent } from '../components/stats/AbilityScore'
import { createLevelComponent } from '../components/stats/Level'

export const HomePageComponent: React.FunctionComponent<{}> =
    () => {

        const AbilityScoreComponent = createAbilityScoreComponent<AppState>()
        const CharacterInfoComponent = createCharacterInfoComponent<AppState>()
        const LevelComponent = createLevelComponent<AppState>()

        return (
            <div>
                <CharacterInfoComponent />
                <LevelComponent />
                <AbilityScoreComponent />
            </div>
        )
    }