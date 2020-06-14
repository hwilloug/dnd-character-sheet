<template>
<div id="cantrips">
  <h2>Cantrips</h2>
  <v-expansion-panels focusable accordion
    :hover=true
  >
    <v-expansion-panel
      v-for="cantrip in cantrips"
      :key="cantrip"
    >
      <v-expansion-panel-header
        class='panel-header'
        color="grey white--text"
      >
        <b>{{ cantrip }}</b>
        <span v-if="getSpellInfo(cantrip, 'to_hit')">To hit: {{ getSpellInfo(cantrip, 'to_hit')}}</span>
        <span v-if="getSpellInfo(cantrip, 'damage')">{{ getSpellInfo(cantrip, 'damage')}} {{ getSpellInfo(cantrip, 'damage_type')}}</span>
      </v-expansion-panel-header>
      <v-expansion-panel-content class='panel-content'>
        <p><b>Casting time</b>: {{ getSpellInfo(cantrip, 'casting_time') }}</p>
        <p><b>Range</b>: {{ getSpellInfo(cantrip, 'range') }}</p>
        <p><b>Components</b>: {{ getSpellInfo(cantrip, 'components') }}</p>
        <p><b>Duration</b>: {{ getSpellInfo(cantrip, 'duration') }}</p>
        <p><b>Description</b>:
          <div class="description">
            <p v-for="paragraph in breakJsonText(getSpellInfo(cantrip, 'description'))" :key="paragraph">
              {{ paragraph }}
            </p>
          </div><br>
        <p><a :href="getSpellInfo(cantrip, 'link')" target="_blank">More Info</a></p>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</div>
</template>

<script>
import Spells from './json/spells.json'
import Methods from './methods.js'

export default {
  name: "Cantrips",
  props: ["cantrips", "level"],
  methods: {
    getSpellInfo(spell, info) {
      if (spell) {
        if (info == 'damage') {
          return Spells[spell][info][this.level];
        } else return Spells[spell][info];
      } else return ""
    },
    breakJsonText: Methods.breakJsonText
  }
}
</script>

<style>
#cantrips {
  background-image: url('../assets/text_frame_4_extended.png');
  background-size: 100% 100%;
  padding: 30px;
}


</style>
