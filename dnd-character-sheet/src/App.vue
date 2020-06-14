<template>
  <v-app id="app">
    <v-system-bar fixed dark color="red darken-4 white--text">
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
      <div id="sheet-container">
        <Stats :stats="stats"/>
        <SavingThrows :savingThrows="savingThrows" :stats="stats" />
        <Skills :stats="stats" :proficiencies="proficiencies.skills" :expertise="proficiencies.expertise" />
        <Session :session="session" :stats="stats" :armor="armor"
          @update-hp="updateInt"
          @update-deathsave="updateDeathSave"
          @update-limitedfeature="updateLimitedFeature"
          @reset-session="resetSession"
        />
        <Proficiencies :proficiencies="proficiencies" />
      </div>
      <div id="second-container">
        <div id="attacks-container">
          <Cantrips :cantrips="attacks.cantrips" :level="characterInfo.level" v-if="checkLength(attacks.cantrips)"/>
          <Spells :spells="attacks.spells" v-if="checkLength(attacks.spells)"/>
          <Weapons
            v-if="checkLength(attacks.weapons)"
            :weapons="attacks.weapons"
            :ammunition="attacks.ammunition"
            @update-ammo="updateAmmo"
          />
        </div>
        <div id="items-container">
          <Items :items="items"
            @update-notes="updateItemNotes"
            @toggle-favorite="toggleFavorite"
          />
        </div>
      </div>
      <div id="third-container">
        <div id="left-third">
          <Features :features="features" />
        </div>
        <div id="right-third">
          <OtherCharacterInfo :otherInfo="otherInfo" />
        </div>
      </div>
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
import Session from './components/Session';
import Cantrips from './components/Cantrips';
import Spells from './components/Spells';
import Weapons from './components/Weapons';
import Items from './components/Items';
import Features from './components/Features';
import OtherCharacterInfo from './components/OtherCharacterInfo';
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
    Session,
    Cantrips,
    Spells,
    Weapons,
    Items,
    Features,
    OtherCharacterInfo,
    Footer
  },

  data: () => ({
    characterName: 'Nissa',
    fullSheet: {},
    characterInfo: {},
    stats: {},
    proficiencies: {},
    savingThrows: {},
    armor: {},
    attacks: {},
    items: {},
    features: {},
    otherInfo: {},
    session: {},
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
        this.features = resp.data.features;
        this.otherInfo = resp.data.other_character_info;
        this.session = resp.data.session;
      })
    },
    updateCharacterSheet() {
      if (Object.keys(this.fullSheet).length) {
        api.updateCharacterSheet( this.characterName, this.fullSheet);
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
      this.updateCharacterSheet();
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
    },
    updateInt(val) {
      const updateFields = val[0];
      const newVal = val[1].toString();
      this.fullSheet[updateFields[0]][updateFields[1]] = newVal;
      this.updateCharacterSheet();
    },
    updateDeathSave(val) {
      this.fullSheet.session.death_saves[val[0]][val[1]] = val[2];
      this.updateCharacterSheet();
    },
    updateLimitedFeature(val) {
      this.fullSheet.session.limited_features[val[0]][val[1]] = val[2];
      this.updateCharacterSheet();
    },
    resetSession() {
      this.fullSheet.session.hp = this.stats.max_hp;
      this.fullSheet.session.death_saves.success["1"] = false;
      this.fullSheet.session.death_saves.success["2"] = false;
      this.fullSheet.session.death_saves.success["3"] = false;
      this.fullSheet.session.death_saves.failure["1"] = false;
      this.fullSheet.session.death_saves.failure["2"] = false;
      this.fullSheet.session.death_saves.failure["3"] = false;
      const features = Object.keys(this.fullSheet.session.limited_features);
      for (var f in features) {
        const slots = Object.keys(this.fullSheet.session.limited_features[features[f]]);
        for (var s in slots) {
          this.fullSheet.session.limited_features[features[f]][slots[s]] = false;
        }
      }
      this.updateCharacterSheet();
    },
    updateItemNotes(val) {
      this.fullSheet.items.adventuring_gear[val[0]]['notes'] = val[1];
      this.updateCharacterSheet();
    },
    checkLength(field) {
      if (field) {
        return field.length > 0
      } else return false
    },
    toggleFavorite(val) {
      if (this.fullSheet.items.adventuring_gear) {
        this.fullSheet.items.adventuring_gear[val[0]]['favorite'] = val[1]
        this.updateCharacterSheet();
      }
    },
    updateAmmo(val) {
      this.fullSheet.attacks.ammunition[val[0]] = val[1];
      this.updateCharacterSheet();
    },
  }
};
</script>

<style>
#app {
  background-color: oldlace;
}

#sheet-container {
  display: flex;
  flex-flow: column wrap;
  align-content: flex-start;
  align-items: center;
  max-height: 60rem;
}

#second-container {
  display: flex;
  margin: 10px 10%;
}

#third-container {
  display: flex;
  margin: 10px 10%;
}

#attacks-container {
  flex: 0 0 50%;
}

#items-container {
  flex: 1;
}

#character-info {
  display: flex;
}

#stats {
  display: flex;
  flex-direction: column;
  padding: 5px;
  margin: 10px;
}

#skills {
  margin: 10px;
}

#proficiencies {
  margin: 10px;
}

#saving-throws-component {
  margin: 10px;
}

#spells {
  margin: 10px;
}

#cantrips {
  margin: 10px;
}

#weapons {
  margin: 10px;
}

#items {
  margin: 10px;
}

#left-third {
  flex: 0 0 50%;
  padding: 10px;
}

#right-third {
  flex: 1;
  padding: 10px;
}

h2 {
  color: darkred;
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
