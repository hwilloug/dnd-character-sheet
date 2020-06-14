<template>
<div id="weapons">
  <h2>Weapons</h2>
  <div v-if="getAmmunitionTypes.length" id="allAmmo">
    <div v-for="ammo in getAmmunitionTypes" :key="ammo" class="ammo">
      {{ ammo }}<br>
      <v-btn
        class="mx-2"
        depressed
        dark
        height="10px"
        width="10px"
        fab
        color="red darken-4"
        @click="emitChange(ammo, 'decrement')"
      ><v-icon x-small class="increment-button">mdi-minus</v-icon></v-btn>
      <span class="ammo-amount">{{ ammunition[ammo] }}</span>
      <v-btn
        class="mx-2"
        depressed
        dark
        height="10px"
        width="10px"
        fab
        color="red darken-4"
        @click="emitChange(ammo, 'increment')"
      ><v-icon x-small class="increment-button">mdi-plus</v-icon></v-btn>
      <br>
      <span v-for="i in getAmmunitionAmount(ammo)" :key="i">
        <v-icon class="bullet">mdi-bullet</v-icon>
      </span>
    </div>
  </div>
  <v-expansion-panels
    focusable accordion
    :hover=true
  >
    <v-expansion-panel
      v-for="weapon in weapons"
      :key="weapon"
    >
      <v-expansion-panel-header
        class='panel-header'
        color="grey white--text"
      >
        <b>{{ weapon }}</b>
        <span>Range: {{ getWeaponInfo(weapon, 'range')}}</span>
        <span>{{ getWeaponInfo(weapon, 'damage')}} {{ getWeaponInfo(weapon, 'damage_type')}}</span>
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
  props: ["weapons", "ammunition"],
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
    },
    getAmmunitionAmount(ammunition) {
      if (this.ammunition) {
        return parseInt(this.ammunition[ammunition])
      } else return 0
    },
    emitChange(ammunition, whichWay) {
      let newValue = whichWay == "increment" ? parseInt(this.ammunition[ammunition]) + 1 : parseInt(this.ammunition[ammunition]) - 1;
      newValue = newValue < 0 ? 0 : newValue;
      this.$emit('update-ammo', [ammunition, newValue.toString()]);
    },
  },
  computed: {
    getAmmunitionTypes() {
      if (this.ammunition) {
        return Object.keys(this.ammunition)
      } else return []
    }
  }
}
</script>

<style>
#weapons {
  padding: 30px;
  background-image: url('../assets/text_frame_4.png');
  background-size: 100% 100%;
}

#allAmmo {
  display: flex;
}

.ammo {
  border: 1px solid black;
  border-radius: 10px;
  width: 87px;
  padding: 10px;
  margin: 10px;
  text-align: center;
}

.bullet {
  max-width: 6px;
  max-height: 10px;
}

.increment-button {
  max-width: 10px;
  max-height: 10px;
}

.ammo-amount {
  margin: 0px -5px;
}

</style>
