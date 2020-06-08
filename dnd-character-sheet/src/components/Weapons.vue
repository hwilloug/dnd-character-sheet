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
        color="red darken-4 white--text"
      >
        <b>{{ weapon }}</b>
        <span>Damage: {{ getWeaponInfo(weapon, 'damage')}} {{ getWeaponInfo(weapon, 'damage_type')}}</span>
        <span>Range: {{ getWeaponInfo(weapon, 'range')}}</span>
      </v-expansion-panel-header>
      <v-expansion-panel-content class='panel-content'>
        <p><b>Weapon type</b>: {{ getWeaponInfo(weapon, 'type') }} <i>{{ getWeaponInfo(weapon, 'subtype')}}</i></p>
        <p><b>Rarity</b>: {{ getWeaponInfo(weapon, 'rarity') }}</p>
        <p><b>Properties</b>: {{ getWeaponInfo(weapon, 'properties')}}</p>
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
    getWeaponInfo(weapon, info) {
      if (weapon) {
        return Weapons[weapon][info];
      } else return ""
    }
  }
}
</script>

<style>
#weapons {
  padding: 10px;
  width: 50%;
  float: left;
}

</style>
