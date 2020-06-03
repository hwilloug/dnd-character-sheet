<template>
  <v-app>
    <v-system-bar dark color="indigo darken-2">
      <span>DND Character Sheet App</span>
      <v-spacer></v-spacer>
      <img src="./assets/vue_logo.png" height="20px"> 
      <img src="./assets/vuetify_logo.png" height="20px">
      <img src="./assets/node_logo.png" height="20px">
    </v-system-bar>
    <v-content>
      <CharacterInfo :characterInfo="characterInfo" />
      <Spells :spells="attacks.spells" />
    </v-content>
  </v-app>
</template>

<script>
import CharacterInfo from './components/CharacterInfo';
import Spells from './components/Spells';
import api from '@/services/CharacterSheet'

export default {
  name: 'App',

  components: {
    CharacterInfo,
    Spells,
  },

  data: () => ({
    characterInfo: {},
    stats: {},
    proficiencies: {},
    savingThrows: {},
    armor: [],
    attacks: {},
    items: {},
    otherInfo: {}
  }),
  created() {
    api.getCharacterSheet("Nissa").then(resp => {
      this.characterInfo = resp.data.character_info;
      this.stats = resp.data.stats;
      this.proficiencies = resp.data.proficiencies;
      this.savingThrows = resp.data.saving_throws;
      this.armor = resp.data.armor;
      this.attacks = resp.data.attacks;
      this.items = resp.data.items;
      this.otherInfo = resp.data.other_character_info;
    })
  }
};
</script>

<style>
#spells {

}

.panel-header {
  background-color: crimson;
  color: white;
}
</style>
