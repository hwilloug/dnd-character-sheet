<template>
<div id="spells">
  <h2>Spells</h2>
  <v-expansion-panels
    focusable accordion
    :hover=true
  >
    <v-expansion-panel
      v-for="spell in spells"
      :key="spell"
    >
      <v-expansion-panel-header
        class='panel-header'
        color="grey white--text"
      >
        <b>{{ spell }}</b>
        <span v-if="getSpellInfo(spell, 'to_hit')">To hit: {{ getSpellInfo(spell, 'to_hit')}}</span>
        <span v-if="getSpellInfo(spell, 'damage')">{{ getSpellInfo(spell, 'damage')}} {{ getSpellInfo(spell, 'damage_type')}}</span>
      </v-expansion-panel-header>
      <v-expansion-panel-content class='panel-content'>
        <p><b>Level</b>: {{ getSpellInfo(spell, 'level') }}</p>
        <p><b>Casting time</b>: {{ getSpellInfo(spell, 'casting_time') }}</p>
        <p><b>Range</b>: {{ getSpellInfo(spell, 'range') }}</p>
        <p><b>Components</b>: {{ getSpellInfo(spell, 'components') }}</p>
        <p><b>Duration</b>: {{ getSpellInfo(spell, 'duration') }}</p>
        <p><b>Description</b>:<br>
          <div class="description">
            <p v-for="paragraph in breakJsonText(getSpellInfo(spell, 'description'))" :key="paragraph">
              {{ paragraph }}
            </p>
          </div><br>
        <p><a :href="getSpellInfo(spell, 'link')" target="_blank">More Info</a></p>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</div>
</template>

<script>
import Spells from './json/spells.json'
import Methods from './methods.js'

export default {
  name: "Spells",
  props: ["spells"],
  methods: {
    getSpellInfo(spell, info) {
      if (spell) {
        return Spells[spell][info];
      } else return ""
    },
    breakJsonText: Methods.breakJsonText
  }
}
</script>

<style>
#spells {
  background-image: url('../assets/text_frame_4_extended.png');
  background-size: 100% 100%;
  padding: 30px;
}

.description {
  max-height: 200px;
  overflow-y: auto;
}


</style>
