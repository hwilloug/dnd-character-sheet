<template>
  <v-app>
    <v-system-bar dark color="red darken-4">
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
      <Spells :spells="attacks.spells" />
    </v-content>
    <Footer />
  </v-app>
</template>

<script>
import CharacterInfo from './components/CharacterInfo';
import Spells from './components/Spells';
import Footer from './components/Footer';
import api from '@/services/CharacterSheet';

export default {
  name: 'App',

  components: {
    CharacterInfo,
    Spells,
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
      this.fullSheet[field[0]][field[1]] = value[1].toString();
    }
  }
};
</script>

<style>
#character-info {
  display: flex;
}

#spells {

}
</style>
