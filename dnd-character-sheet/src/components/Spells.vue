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
// Rework this to:
//  - Pull spell info from a different json <fieldset>
//  - Don't use a sub-component
import SpellInfo from './subcomponents/SpellInfo.vue'

export default {
  name: "Spells",
  props: [
    "spells"
  ],
  components: {
    SpellInfo
  },
}
</script>

<style>

</style>
