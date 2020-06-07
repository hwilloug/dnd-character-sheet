<template>
<div id="saving-throws-component">
  <div class="saving-throws">
    <h5>Saving Throws</h5>
    <table class="saving-throws-table">
      <tr>
        <td class="statST"><v-icon>{{ savingThrows.strength ? "mdi-alpha-p-circle" : "mdi-alpha-p-circle-outline" }}</v-icon><span class="modifier">{{ calculateModifier(stats.strength, savingThrows.strength, stats.proficiency_bonus) }}</span>STR</td>
        <td class="statST"><v-icon>{{ savingThrows.intelligence ? "mdi-alpha-p-circle" : "mdi-alpha-p-circle-outline" }}</v-icon><span class="modifier">{{ calculateModifier(stats.intelligence, savingThrows.intelligence, stats.proficiency_bonus) }}</span>INT</td><br>
      </tr><tr>
        <td class="statST"><v-icon>{{ savingThrows.dexterity ? "mdi-alpha-p-circle" : "mdi-alpha-p-circle-outline" }}</v-icon><span class="modifier">{{ calculateModifier(stats.dexterity, savingThrows.dexterity, stats.proficiency_bonus) }}</span>DEX</td>
        <td class="statST"><v-icon>{{ savingThrows.wisdom ? "mdi-alpha-p-circle" : "mdi-alpha-p-circle-outline" }}</v-icon><span class="modifier">{{ calculateModifier(stats.wisdom, savingThrows.wisdom, stats.proficiency_bonus) }}</span>WIS</td><br>
      </tr><tr>
        <td class="statST"><v-icon>{{ savingThrows.constitution ? "mdi-alpha-p-circle" : "mdi-alpha-p-circle-outline" }}</v-icon><span class="modifier">{{ calculateModifier(stats.constitution, savingThrows.constitution, stats.proficiency_bonus) }}</span>CON</td>
        <td class="statST"><v-icon>{{ savingThrows.charisma ? "mdi-alpha-p-circle" : "mdi-alpha-p-circle-outline" }}</v-icon><span class="modifier">{{ calculateModifier(stats.charisma, savingThrows.charisma, stats.proficiency_bonus) }}</span>CHA</td>
      </tr>
    </table>
    <ul class="saving-throws-list">
      <li
        v-for="item in savingThrows.saving_throws"
        :key="item"
      >{{ item }}</li>
    </ul>
  </div>
  <div class="resistances" v-if="resistancesLength">
    <h5>Resistances</h5>
    <div class="resistance-items">
      <span class="resistance" v-for="resistance in savingThrows.resistances" :key="resistance">{{ resistance }}</span>
    </div>
  </div>
  <div class="resistances" v-else>
    <h5>Resistances</h5>
    <span>None</span>
  </div>
</div>
</template>

<script>
import Methods from './methods.js'

export default {
  name: "SavingThrows",
  props:["savingThrows", "stats"],
  methods: {
    calculateModifier: Methods.calculateModifier
  },
  computed: {
    resistancesLength: function () {
      if (this.savingThrows.resistances) {
        return this.savingThrows.resistances.length
      }
      else return false
    }
  }
}
</script>

<style>
#saving-throws-component {
  border: 1px black dashed;
  border-radius: 3px;
  padding: 5px;
  background-color: white;
}

#saving-throws-component .statST {
  padding: 2px 7px;
  margin: 2px 5px;
}

.saving-throws {
  padding: 5px;
  border-bottom: 2px solid darkred;
}

.modifier {
  display: inline-block;
  border: solid 1px darkred;
  width: 30px;
  margin: 0px 5px;
  padding: 0px 2px;
  text-align: center;
  color: darkred;
  font-weight: bold;
}

.saving-throws-list {
  list-style-type: circle;
}

.resistance-items {
  display: flex;
  max-width: 250px;
  flex-wrap: wrap;
}

.resistance {
  padding: 5px;
}
</style>
