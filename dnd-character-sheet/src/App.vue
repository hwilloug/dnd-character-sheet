<template>
  <v-app>
    <v-system-bar fixed dark color="red darken-4">
      <span>DND Character Sheet App</span>
      <v-spacer></v-spacer>
      <span>{{ characterInfo.player_name }}</span>
      <v-icon
        style="padding-left: 10px;"

      >{{ loadingIcon }}</v-icon>
    </v-system-bar>
    <v-content>
      <CharacterInfo
        :characterInfo="characterInfo"
        @clicked="incrementInteger"
        @update-text="updateText"
      />
      <Stats :stats="stats"/>
      <Skills :stats="stats" :proficiencies="proficiencies.skills" :expertise="proficiencies.expertise" />
      <SavingThrows :savingThrows="savingThrows" :stats="stats" />
      <Proficiencies :proficiencies="proficiencies" />
      <!--<Spells :spells="attacks.spells" />-->
      <Footer />
    </v-content>
  </v-app>
</template>

<script>
import CharacterInfo from './components/CharacterInfo';
import Stats from './components/Stats';
import Skills from './components/Skills';
import SavingThrows from './components/SavingThrows';
import Proficiencies from './components/Proficiencies';
//import Spells from './components/Spells';
import Footer from './components/Footer';
import api from '@/services/CharacterSheet';

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
  created() {
    api.getCharacterSheet(this.characterName).then(resp => {
      this.fullSheet = resp.data;
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
  watch: {
    fullSheet: {handler: 'updateCharacterSheet', deep: true}
  },
  methods: {
    // Update these to be more specific
    updateCharacterSheet(val) {
      api.updateCharacterSheet( this.characterName, val);
      this.loadingIcon = "mdi-check-bold";
    },
    incrementInteger(value) {
      this.loadingIcon = "mdi-loading mdi-spin";
      const field = value[0];
      const whichWay = value[1];
      const currentValue = value[2];
      let newValue = whichWay == "increment" ? parseInt(currentValue) + 1 : parseInt(currentValue) - 1;
      this.fullSheet[field[0]][field[1]] = newValue.toString();
    },
    updateText(value) {
      this.loadingIcon = "mdi-loading mdi-spin";
      const field = value[0];
      if (value[1]) {
        this.fullSheet[field[0]][field[1]] = value[1].toString();
      }
    }
  }
};
</script>

<style>
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
