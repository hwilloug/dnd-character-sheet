<template>
<v-expansion-panel>
  <v-expansion-panel-header class='panel-header'>({{ spell.level }}) <b>{{ spell.name }}</b></v-expansion-panel-header>
  <v-expansion-panel-content class='panel-content'>
    <p><b>Level</b>: {{ spell.level }}</p>
    <p><b>Casting time</b>: {{ spell.casting_time }}</p>
    <p><b>Range</b>: {{ spell.range }}</p>
    <p><b>Components</b>: {{ spell.components }}</p>
    <p><b>Duration</b>: {{ spell.duration }}</p>
    <p><b>Description</b>: {{ spell.description }}</p>
    <p><a :href="spell.link" target="_blank">More Info</a></p>
  </v-expansion-panel-content>
</v-expansion-panel>
</template>

<script>
export default {
  name: "SpellInfo",
  props: ['spell'],
  data() { return {

  }},
}
</script>

<style>

</style>
