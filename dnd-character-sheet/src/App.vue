<template>
  <v-app>
    <v-content>
      <h2>Spells</h2>
      <Spells />
    </v-content>
  </v-app>
</template>

<script>
import Spells from './components/Spells';

export default {
  name: 'App',

  components: {
    Spells,
  },

  data: () => ({
    //
  }),
};
</script>

<style>
.panel-header {
  font-weight: bold;
}

.spells-panel-header {
  background-color: crimson;
  color: white;
}
</style>
