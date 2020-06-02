<template>
  <v-app>
    <v-content>
      <div id="spells">
        <h2>Spells</h2>
        <Spells />
      </div>
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
#spells {
  
}

.panel-header {
  background-color: crimson;
  color: white;
}
</style>
