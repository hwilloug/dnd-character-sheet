<template>
<div id="armor">
  <p>{{ getArmorAC(armor.armor) }} {{ armor.armor }} (<i>{{ getArmorInfo(armor.armor)['category'] }} Armor</i>): {{ getArmorInfo(armor.armor)['description'] }}</p>
  <p v-if="armor.shield">{{ getArmorInfo("Shield")['ac']['base'] }} Shield</p>
</div>
</template>

<script>
import ArmorInfo from '@/components/json/armorInfo.json'
import Methods from '@/components/methods.js'

export default {
  name: "Armor",
  props: ["armor", "stats", "proficiencies"],
  methods: {
    getArmorInfo(armorName) {
      if (ArmorInfo.armor) {
        return ArmorInfo.armor[armorName]
      } else return {}
    },
    getArmorAC(armorName) {
      if (ArmorInfo.armor && armorName) {
        let ac = parseInt(ArmorInfo.armor[armorName]['ac']['base']);
        let modifier = Methods.calculateModifier(this.stats[ArmorInfo.armor[armorName]['ac']['modifier']], false, this.stats.proficiency_bonus);
        ac += parseInt(modifier);
        return ac
      } else return 0
    }
  }
}
</script>

<style>
#armor {
  border: 1px solid black;
  background-color: white;
  padding: 10px;
  max-width: 20rem;
}

#armor p {
  margin: 0px;
  padding: 0px;
}
</style>
