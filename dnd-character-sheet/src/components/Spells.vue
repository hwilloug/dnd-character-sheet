<template>
<div id="spells">
  <h2>Spells</h2>
  <v-expansion-panels
    :multiple=true
    :hover=true
  >
    <SpellInfo
      v-for="spell in spells"
      :key="spell.name"
      :spell="spell"
    />
  </v-expansion-panels>
</div>
</template>

<script>
import SpellInfo from './SpellInfo.vue'

export default {
  name: "Spells",
  props: [
    "spells"
  ],
  components: {
    SpellInfo
  },
  data: () => ({
    //
  })
}
</script>

<style>

</style>
