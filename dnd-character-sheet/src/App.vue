<template>
  <v-app>
    <v-system-bar fixed dark color="red darken-4">
      <span>DND Character Sheet App</span>
      <v-spacer></v-spacer>
      <span>{{ characterInfo.player_name }}</span>
      <v-icon style="padding-left: 10px;">{{ loadingIcon }}</v-icon>
    </v-system-bar>
    <v-content>
      <CharacterInfo
        :characterInfo="characterInfo"
        @update-text="updateText"
      />
      <div id="outer-container">
        <Stats :stats="stats"/>
        <SavingThrows :savingThrows="savingThrows" :stats="stats" />
        <Skills :stats="stats" :proficiencies="proficiencies.skills" :expertise="proficiencies.expertise" />
        <Proficiencies :proficiencies="proficiencies" />
      </div>
      <!--<Spells :spells="attacks.spells" />-->
      <Footer />
    </v-content>
  </v-app>
</template>

<script>
// COMPONENTS
import CharacterInfo from './components/CharacterInfo';
import Stats from './components/Stats';
import Skills from './components/Skills';
import SavingThrows from './components/SavingThrows';
import Proficiencies from './components/Proficiencies';
//import Spells from './components/Spells';
import Footer from './components/Footer';
// API
import api from '@/services/CharacterSheet';
// JSON
import LevelUpInfo from '@/components/json/levelUpInfo.json'

export default {
  name: 'App',

  components: {
    CharacterInfo,
    Stats,
    Skills,
    SavingThrows,
    Proficiencies,
    //Spells,
    Footer
  },

  data: () => ({
    characterName: 'Nissa',
    fullSheet: {},
    characterInfo: {},
    stats: {},
    proficiencies: {},
    savingThrows: {},
    armor: [],
    attacks: {},
    items: {},
    otherInfo: {},
    loadingIcon: "mdi-check-bold"
  }),
  created() {this.loadCharacterSheet()},
  methods: {
    // Update these to be more specific
    loadCharacterSheet() {
      api.getCharacterSheet(this.characterName).then(resp => {
        this.fullSheet = resp.data;
        this.updateCharacterSheet(this.fullSheet);
        this.characterInfo = resp.data.character_info;
        this.stats = resp.data.stats;
        this.proficiencies = resp.data.proficiencies;
        this.savingThrows = resp.data.saving_throws;
        this.armor = resp.data.armor;
        this.attacks = resp.data.attacks;
        this.items = resp.data.items;
        this.otherInfo = resp.data.other_character_info;
      })
    },
    updateCharacterSheet(val) {
      if (Object.keys(val).length) {
        api.updateCharacterSheet( this.characterName, val);
        this.loadingIcon = "mdi-check-bold";
      }
    },
    updateText(value) {
      this.loadingIcon = "mdi-loading mdi-spin";
      const field = value[0];
      if (value[1]) {
        this.fullSheet[field[0]][field[1]] = value[1].toString();
        this.updateLevelInfo(value[1]);
      }
      this.updateCharacterSheet(this.fullSheet);
    },
    updateLevelInfo(exp) {
      // Need to fix for level 20
      console.log("Updating level info...")
      this.loadingIcon = "mdi-loading mdi-spin";
      const levelUpExp = Object.keys(LevelUpInfo);
      for (let level in levelUpExp) {
        if (exp > parseInt(levelUpExp[level])) {
          continue
        } else {
          const newLevel = LevelUpInfo[levelUpExp[level-1]][0];
          const newProfBonus = LevelUpInfo[levelUpExp[level-1]][1];
          this.fullSheet.character_info.level = newLevel;
          this.fullSheet.stats.proficiency_bonus = newProfBonus;
          break;
        }
      }
    }
  }
};
</script>

<style>
#outer-container {
  display: flex;
  flex-flow: column wrap;
  align-content: flex-start;
  justify-content: center;
  align-items: center;
  max-height: 60rem;
}

#character-info {
  display: flex;
}

#stats {
  display: flex;
  flex-direction: column;
  float: left;
  padding: 5px;
  margin: 10px;
}

#skills {
  float: left;
  margin: 10px;
}

#proficiencies {
  float: left;
  margin: 10px;
}

#saving-throws-component {
  float: left;
  margin: 10px;
}

#spells {
  padding: 10px;
}


/* Hover boxes stuff */
.tooltip {
  position: relative;
  display: inline-block;
}

.tooltip .tooltiptext {
  visibility: hidden;
  background-color: burlywood;
  color: darkslategrey;
  padding: 5px;
  border: 2px solid dimgrey;
  border-radius: 6px;
  box-shadow: 5px 5px darkslategrey;

  position: absolute;
  width: 120px;
  top: 100%;
  left: 50%;
  margin-left: -60px;
  z-index: 1;
}

.tooltip .tooltiplong::after {
 content: " ";
 position: absolute;
 bottom: 100%;  /* At the top of the tooltip */
 left: 5%;
 margin-left: -5px;
 border-width: 5px;
 border-style: solid;
 border-color: transparent transparent dimgrey transparent;
}

.tooltip .tooltipshort::after {
 content: " ";
 position: absolute;
 bottom: 100%;  /* At the top of the tooltip */
 left: 50%;
 margin-left: -5px;
 border-width: 5px;
 border-style: solid;
 border-color: transparent transparent dimgrey transparent;
}

.tooltip .tooltipshort{
  width: 120px;
}

.tooltip .tooltiplong {
  width: 500px;
}

.tooltip:hover .tooltiptext {
  visibility: visible;
}
</style>
