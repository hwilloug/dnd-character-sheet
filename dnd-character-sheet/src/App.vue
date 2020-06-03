<template>
  <v-app>
    <v-system-bar dark color="red darken-4">
      <span>DND Character Sheet App</span>
      <v-spacer></v-spacer>
      <span>{{ characterInfo.player_name }}</span>
    </v-system-bar>
    <v-content>
      <CharacterInfo :characterInfo="characterInfo" />
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
#character-info {
  display: flex;
}

#spells {

}
</style>
