<template>
<div id="spells">
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
import mySpells from '../../../json/spells.json'

export default {
  name: "Spells",
  components: {
    SpellInfo
  },
  data () { return {
    spells: mySpells.data
  }}
}
</script>

<style>

</style>
