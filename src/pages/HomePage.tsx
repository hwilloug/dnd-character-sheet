import styled from '@emotion/styled'
import React from 'react'
import { AppState } from '../app-store'
import { createAppearanceComponent } from '../components/character-info/Appearance'
import { createCharacterInfoComponent } from '../components/character-info/CharacterInfo'
import { createPersonalityComponent } from '../components/character-info/Personality'
import { createFeaturesComponent } from '../components/features/Features'
import { createItemsComponent } from '../components/items/Items'
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
      const AppearanceComponent = createAppearanceComponent<AppState>()
      const PersonalityComponent = createPersonalityComponent<AppState>()
      const ItemsComponent = createItemsComponent<AppState>()

      return (
        <SheetContainer>
          <CharacterInfoComponent />
          <LevelComponent />
          <AbilityScoreComponent />
          <SkillsComponent />
          <SavingThrowsComponent />
          <FeaturesComponent />
          <AppearanceComponent />
          <PersonalityComponent />
          <ItemsComponent />
        </SheetContainer>
      )
    }