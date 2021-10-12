import React, { useEffect } from 'react'
import { AppState } from '../app-store'
import { createCharacterInfoComponent } from '../components/character-info/CharacterInfo'
import { createAbilityScoreComponent } from '../components/stats/AbilityScore'
import { createLevelComponent } from '../components/stats/Level'
import { createSkillsComponent } from '../components/stats/Skills'

export const HomePageComponent: React.FunctionComponent<{}> =
    () => {

        const AbilityScoreComponent = createAbilityScoreComponent<AppState>()
        const CharacterInfoComponent = createCharacterInfoComponent<AppState>()
        const LevelComponent = createLevelComponent<AppState>()
        const SkillsComponent = createSkillsComponent<AppState>()

        return (
            <div>
                <CharacterInfoComponent />
                <LevelComponent />
                <AbilityScoreComponent />
                <SkillsComponent />
            </div>
        )
    }