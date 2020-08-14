<template>
<div id="armor">
  <h4><span class="ac">{{ calculateAC }}</span>Armor AC</h4>
  <p>
    <span class="armor-ac">{{ getArmorAC(armor.armor) }}</span>
    <span class="tooltip">{{ armor.armor }} (<i>{{ getArmorInfo(armor.armor)['category'] }} Armor</i>)
      <span class="tooltiptext tooltiplong">{{ getArmorInfo(armor.armor)['description'] }}</span>
    </span>
    <span class="tooltip" v-if="!getArmorProficiency(armor.armor)"><v-icon color="yellow darken-3">mdi-alert-outline</v-icon>
      <span class="tooltiptext tooltipmedium">Your character does not have proficiency in this type of armor! If you wear armor that you lack proficiency with, you have disadvantage on any ability check, saving throw, or Attack roll that involves Strength or Dexterity, and you can’t cast Spells.</span>
    </span>
  </p>
  <p v-if="armor.shield"><span class="armor-ac">{{ getArmorInfo("Shield")['ac']['base'] }}</span> Shield
    <span class="tooltip" v-if="!getArmorProficiency(armor.armor)"><v-icon color="yellow darken-3">mdi-alert-outline</v-icon>
      <span class="tooltiptext tooltipmedium">Your character does not have proficiency in this type of armor! If you wear armor that you lack proficiency with, you have disadvantage on any ability check, saving throw, or Attack roll that involves Strength or Dexterity, and you can’t cast Spells.</span>
    </span>
  </p>
</div>
</template>

<script>
import ArmorInfo from '@/components/json/armorInfo.json'
//import Methods from '@/components/methods.js'

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
        return ac
      } else return 0
    },
    getArmorProficiency(armorName) {
      if (ArmorInfo.armor && armorName) {
        const category = ArmorInfo.armor[armorName]['category'].toLowerCase();
        return this.proficiencies[category]
      } else return true
    }
  },
  computed: {
    calculateAC: function() {
      let ac = 0;
      if (this.armor.armor) {
        ac += this.getArmorAC(this.armor.armor);
        console.log(ac)
      }
      if (this.armor.shield) {
        ac += this.getArmorAC('Shield')
        console.log(ac)
      }
      console.log(ac)
      return ac
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

#armor h4 {
  margin-bottom: 5px;
}

#armor .ac {
  border: darkred solid 1px;
  padding: 5px;
  margin-right: 5px;
}

#armor .armor-ac {
  border-right: darkred solid 2px;
  padding-right: 5px;
  margin-right: 5px;
}
</style>
