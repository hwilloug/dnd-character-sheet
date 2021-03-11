<template>
  <v-app id="app">
    <v-app-bar app fixed dark dense elevate-on-scroll clipped-left color="red darken-4 white--text">
      <v-toolbar-title>DND Character Sheet</v-toolbar-title>
      <v-spacer></v-spacer>
      <span><b>{{ characterInfo.character_name }} "{{ characterInfo.character_nickname }}" {{ characterInfo.clan_name }}</b><v-icon>mdi-circle-small</v-icon>{{ characterInfo.race}} {{ characterInfo.class }}<v-icon>mdi-circle-small</v-icon>Level {{ characterInfo.level }}</span><v-app-bar-nav-icon></v-app-bar-nav-icon>
    </v-app-bar>
    <v-navigation-drawer
      :mini-variant="mini"
      permanent
      app
      color="red darken-4"
      dark
      clipped
    >
    <v-list-item class="px-2">
      <v-list-item-avatar @click.stop="mini = false">
        <v-img src="./assets/forest_gnome.png"></v-img>
      </v-list-item-avatar>
      <v-list-item-title>{{ characterInfo.character_name }} {{ characterInfo.clan_name }}</v-list-item-title>
      <v-btn
      icon
      @click.stop="mini = true"
      >
      <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
    </v-list-item>
    <v-divider></v-divider>
    <v-list dense>
      <v-list-item
        v-for="navi in navigation"
        :key="navi.title"
        link
        @click.stop="tab = navi.title"
      >
        <v-list-item-icon>
          <v-icon>{{ navi.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>{{ navi.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
  <v-content>
<Combat
  v-if="tab === 'Combat'"
  :stats="stats"
  :savingThrows="savingThrows"
  :proficiencies="proficiencies"
  :armor="armor"
  :attacks="attacks"
  :characterInfo="characterInfo"
  :session="session"
  :features="features"
  @update-sheet="updateSheetField"
  @update-deathsave="updateDeathSave"
  @update-limitedfeature="updateLimitedFeature"
  @reset-session="resetSession"
/>
<div v-if="tab === 'Items'">
  <div id="items-container">
    <Items :items="items"
    @update-sheet="updateSheetField"
    />
  </div>
</div>
<div v-if="tab === 'Character Info'">
  <CharacterInfo
  :characterInfo="characterInfo"
  @update-text="updateText"
  />
  <OtherCharacterInfo
  :characterInfo="characterInfo"
  :otherInfo="otherInfo"
  @update-character-history="updateCharacterHistory"
  />
  <div id="third-container">
    <div id="left-third">
      <Features :features="features" />
    </div>
    <div id="right-third">
      <h2>Notes</h2>
      <textarea
      id="notes"
      v-model="notes"
      @keyup="updateNotes"
      ></textarea>
    </div>
  </div>
</div>
<div v-if="tab === 'Notes'">
  <SessionNotes
  :sessionNotes="sessionNotes"
  @update-session-notes="updateSessionNotes"
  />
</div>
</v-content>
<Footer />
</v-app>
</template>

<script>
// COMPONENTS
import Combat from '@/components/views/Combat.vue';

import CharacterInfo from '@/components/CharacterInfo';
import Items from '@/components/Items';
import Features from '@/components/Features';
import OtherCharacterInfo from '@/components/OtherCharacterInfo';
import SessionNotes from '@/components/SessionNotes';
import Footer from '@/components/Footer';
// API
import api from '@/services/CharacterSheet';
// JSON
import LevelUpInfo from '@/components/json/levelUpInfo.json'

export default {
  name: 'App',
  components: {
    Combat,
    CharacterInfo,
    Items,
    Features,
    OtherCharacterInfo,
    SessionNotes,
    Footer
  },

  data: () => ({
    characterName: '5f348010cad326f1563b3ec0',
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
    notes: {},
    sessionNotes: {},
    loadingIcon: "mdi-check-bold",
    mini: false,
    tab: "Character Info",
    navigation: [
      {
        "title": "Character Info",
        "icon": "mdi-wizard-hat"
      },
      {
        "title": "Items",
        "icon": "mdi-bag-personal"
      },
      {
        "title": "Combat",
        "icon": "mdi-sword-cross"
      },
      {
        "title": "Notes",
        "icon": "mdi-notebook"
      }
    ]
  }),
  created() {this.loadCharacterSheet()},
  methods: {
    // Update these to be more general
    // THIS IS BAD
    loadCharacterSheet() {
      api.getCharacterSheet(this.characterName).then(resp => {
        this.fullSheet = resp.data;
        this.characterInfo = resp.data.character_info;
        this.stats = resp.data.stats;
        this.proficiencies = resp.data.proficiencies;
        this.savingThrows = resp.data.saving_throws;
        this.armor = resp.data.armor;
        this.attacks = resp.data.attacks;
        this.items = resp.data.items;
        this.features = resp.data.features;
        this.otherInfo = resp.data.other_character_info;
        this.notes = resp.data.notes;
        this.session = resp.data.session;
        this.sessionNotes = resp.data.session_notes;
      })
    },
    updateCharacterSheet() {
      this.loadingIcon = "mdi-loading mdi-spin";
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
      this.loadingIcon = "mdi-loading mdi-spin";
      const levelUpExp = Object.keys(LevelUpInfo);
      for (let level in levelUpExp) {
        if (exp >= parseInt(levelUpExp[level])) {
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
      this.fullSheet.session.temporary_hp = 0;
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
    updateCoinAmount(val) {
      this.fullSheet.items.money[val[0]] = val[1];
      this.updateCharacterSheet();
    },
    updateNotes() {
      this.fullSheet.notes = this.notes;
      this.updateCharacterSheet();
    },
    updateCharacterHistory(val) {
      this.fullSheet.other_character_info.character_history = val;
      this.updateCharacterSheet();
    },
    updateSessionNotes(val) {
      this.fullSheet.session_notes = val;
      this.updateCharacterSheet();
    },
    updateSheetField(val) {
      const fieldArray = val[0];
      const newValue = val[1];

      switch (fieldArray.length) {
        case 1:
        this.fullSheet[fieldArray[0]] = newValue;
        break;
        case 2:
        this.fullSheet[fieldArray[0]][fieldArray[1]] = newValue;
        break;
        case 3:
        this.fullSheet[fieldArray[0]][fieldArray[1]][fieldArray[2]] = newValue;
        break;
        case 4:
        this.fullSheet[fieldArray[0]][fieldArray[1]][fieldArray[2]][fieldArray[3]] = newValue;
        break;
      }
      this.updateCharacterSheet();
    }
  }
};
</script>

<style>
#app {
  background-color: oldlace;
}

.flex {
  display: flex;
}

.flex-centered {
  align-content: space-around;
}

.flex-50 {
  flex: 0 0 50%;
}

#sheet-container {
  display: flex;
  flex-flow: column wrap;
  align-content: space-around;
  align-items: center;
  max-height: 60rem;
}

#second-container {
  display: flex;
  margin: 10px 10%;
}

#third-container {
  display: flex;
  margin: 10px 50px;
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

#armor {
  margin: 10px;
}

#inspiration {
  margin: 10px;
}

#other-character-info {
  margin: 10px 50px;
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
  flex: 0 0 20%;
  padding: 10px;
}

#right-third {
  flex: 1;
  margin: 10px;
  padding: 10px;
  border: black 5px ridge;
  background-color: white;
  border-radius: 10px;
}

#notes {
  border-top: 2px solid darkred;
  padding: 10px;
  resize: none;
  width: 100%;
  height: 90%;
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

.tooltip .tooltipmedium {
  width: 350px;
}

.tooltip:hover .tooltiptext {
  visibility: visible;
}
</style>
