<template>
  <v-app>
    <v-content>
      <Spells :spells="attacks.spells" />
    </v-content>
  </v-app>
</template>

<script>
import Spells from './components/Spells';
import api from '@/services/CharacterSheet'

export default {
  name: 'App',

  components: {
    Spells,
  },

  data: () => ({
    characterInfo: {},
    stats: {},
    proficiencies: {},
    savingThrows: {},
    attacks: {},
    items: {},
    otherInfo: {}
  }),
  created() {
    api.getCharacterSheet("Nissa").then(resp => {
      console.log(resp.data.attacks.spells)
      this.attacks = resp.data.attacks;
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
