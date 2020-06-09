<template>
<div id="weapons">
  <h2>Weapons</h2>
  <v-expansion-panels
    :multiple=true
    :hover=true
  >
    <v-expansion-panel
      v-for="weapon in weapons"
      :key="weapon"
    >
      <v-expansion-panel-header
        class='panel-header'
        color="grey darken-3 white--text"
      >
        <b>{{ weapon }}</b>
        <span>Damage: {{ getWeaponInfo(weapon, 'damage')}} {{ getWeaponInfo(weapon, 'damage_type')}}</span>
        <span>Range: {{ getWeaponInfo(weapon, 'range')}}</span>
      </v-expansion-panel-header>
      <v-expansion-panel-content class='panel-content'>
        <p><b>Weapon type</b>: {{ getWeaponInfo(weapon, 'type') }} (<i>{{ formatList(weapon, 'subtype') }}</i>)</p>
        <p><b>Rarity</b>: {{ getWeaponInfo(weapon, 'rarity') }}</p>
        <p><b>Properties</b>: {{ formatList(weapon, 'properties')}}</p>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</div>
</template>

<script>
import Weapons from './json/weapons.json'

export default {
  // Need to check proficiencies
  name: "Weapons",
  props: ["weapons"],
  methods: {
    getWeaponInfo(weapon, item) {
      if (weapon) {
        return Weapons[weapon][item];
      } else return ""
    },
    formatList(weapon, item) {
      let array = this.getWeaponInfo(weapon, item);
      if (array) {
        return array.join(', ')
      } else return ""
    }
  },
}
</script>

<style>
#weapons {
  padding: 10px;
  background-color: white;
  border: 1px solid black;
  border-radius: 5px;
}

</style>
