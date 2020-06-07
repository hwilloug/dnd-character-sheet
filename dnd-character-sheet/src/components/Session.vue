<template>
<div id="session">
  <table>
    <tr>
      <td colspan="2">
        <b>HP</b><br>
        <span v-if="parseInt(session.hp) > 0"><v-btn
          class="mx-2"
          depressed
          dark
          height="15px"
          width="15px"
          fab
          color="red darken-4"
          @click="emitChange('decrement')"
        ><v-icon x-small>mdi-minus</v-icon></v-btn></span>
        <span v-else><v-icon height="15px" width="15px" style="padding-right: 6px;" fab>mdi-blank</v-icon></span>
        <span class="current-hp">{{ session.hp }}</span>
        <span v-if="parseInt(session.hp) < parseInt(stats.max_hp)"><v-btn
          class="mx-2"
          depressed
          dark
          height="15px"
          width="15px"
          fab
          color="red darken-4"
          @click="emitChange('increment')"
        ><v-icon x-small>mdi-plus</v-icon></v-btn></span>
        <span v-else><v-icon height="15px" width="15px" style="padding-left: 6px;" fab>mdi-blank</v-icon></span>
        <br>
        {{ stats.max_hp }}
      </td>
      <td><b>Initiative</b><br>{{ 2 }}</td>
    </tr>
    <tr>
      <td><b>Proficiency Bonus</b><br>{{ stats.proficiency_bonus}}</td>
      <td><b>Armor Class</b><br>{{ calculateAC(armor, stats.dexterity) }}</td>
      <td><b>Speed</b><br>{{ stats.speed }}</td>
    </tr>
    <tr>
      <td><b>Death Saves</b><br>
        <v-icon>{{ getDeathSave("success", "1") }}</v-icon>-<v-icon>{{ getDeathSave("success", "2") }}</v-icon>-<v-icon>{{ getDeathSave("success", "3") }}</v-icon><br>
        <v-icon>{{ getDeathSave("failure", "1") }}</v-icon>-<v-icon>{{ getDeathSave("failure", "2") }}</v-icon>-<v-icon>{{ getDeathSave("failure", "3") }}</v-icon>
      </td>
      <td><b>Hit Dice</b></td>
      <td><button class="button" @click="resetSession">RESET</button></td>
    </tr>
  </table>

</div>
</template>

<script>
import Methods from './methods.js'

export default {
  name: "Session",
  props: ["session", "stats", "armor"],
  methods: {
    calculateAC: Methods.calculateAC,
    resetSession() {
      this.$emit('reset-session')
    },
    emitChange(whichWay) {
      let newValue = whichWay == "increment" ? parseInt(this.session.hp) + 1 : parseInt(this.session.hp) - 1;
      this.$emit('update-sheet', [['session', 'hp'], newValue]);
    },
    getDeathSave(successOrFailure, number) {
      if (this.session.death_saves) {
        return this.session.death_saves[successOrFailure][number] ? "mdi-alpha-s-circle" : "mdi-alpha-s-circle-outline";
      }
    }
  }
}
</script>

<style>
#session {
  padding: 5px;
  font-size: 20px;
}

#session table {
  text-align: center;
  collapse-border: collapse;
}

#session td {
  border: 1px solid black;
  margin: 0px;
  background-color: white;
}

#session b {
  font-size: 12px;
}

.current-hp {
  border-bottom: 1px black solid;
  padding: 0px 5px;
}

#session button {
  border: 2px solid darkred;
  border-radius: 5px;
  padding: 5px;
}

#session button:hover {
  background-color: darkred;
  color: white;
}
</style>
