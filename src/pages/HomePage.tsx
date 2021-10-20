import styled from '@emotion/styled'
import React from 'react'
import { AppState } from '../app-store'
import { createCharacterInfoComponent } from '../components/character-info/CharacterInfo'
import { createFeaturesComponent } from '../components/features/Features'
import { createAbilityScoreComponent } from '../components/stats/AbilityScore'
import { createLevelComponent } from '../components/stats/Level'
import { createSavingThrowComponent } from '../components/stats/SavingThrows'
import { createSkillsComponent } from '../components/stats/Skills'

const SheetContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
`


export const HomePageComponent: React.FunctionComponent<{}> =
    () => {

      const AbilityScoreComponent = createAbilityScoreComponent<AppState>()
      const CharacterInfoComponent = createCharacterInfoComponent<AppState>()
      const LevelComponent = createLevelComponent<AppState>()
      const SkillsComponent = createSkillsComponent<AppState>()
      const SavingThrowsComponent = createSavingThrowComponent<AppState>()
      const FeaturesComponent = createFeaturesComponent<AppState>()

      return (
        <SheetContainer>
          <CharacterInfoComponent />
          <LevelComponent />
          <AbilityScoreComponent />
          <SkillsComponent />
          <SavingThrowsComponent />
          <FeaturesComponent />
        </SheetContainer>
      )
    }