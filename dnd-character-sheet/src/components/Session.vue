<template>
<div id="session">
  <table>
    <tr>
      <td colspan="2">
        <b>HP</b><span class="hp-cell"><span class="current-hp-row">
        <span class="inc-btn" v-if="parseInt(session.hp) > 0"><v-btn
          class="mx-2"
          depressed
          dark
          height="10px"
          width="10px"
          fab
          color="red darken-4"
          @click="emitChange('decrement')"
        ><v-icon x-small>mdi-minus</v-icon></v-btn></span>
        <span v-else><v-icon height="10px" width="10px" style="padding-right: 2px;" fab>mdi-blank</v-icon></span>
        <span class="hp current-hp">{{ session.hp }}</span>
        <span class="inc-btn" v-if="parseInt(session.hp) < parseInt(stats.max_hp)"><v-btn
          class="mx-2"
          depressed
          dark
          height="10px"
          width="10px"
          fab
          color="red darken-4"
          @click="emitChange('increment')"
        ><v-icon x-small>mdi-plus</v-icon></v-btn></span>
        <span v-else><v-icon height="10px" width="10px" style="padding-left: 2px;" fab>mdi-blank</v-icon></span></span>
        <span class="hp">{{ stats.max_hp }}</span></span>
        <span class="hp-bar"><v-progress-linear
          height="15px"
          :color="hpPercentageColor"
          :value="hpPercentage"
        ></v-progress-linear></span>
      </td>
      <td class="border"><b>Death Saves</b><br>
        <p class="mini-header">Successes</p>
        <v-icon class="death-save" @click="toggleDeathSave('success', '1')">{{ getDeathSave("success", "1") }}</v-icon>-<v-icon class="death-save" @click="toggleDeathSave('success', '2')">{{ getDeathSave("success", "2") }}</v-icon>-<v-icon class="death-save" @click="toggleDeathSave('success', '3')">{{ getDeathSave("success", "3") }}</v-icon><br>
        <p class="mini-header">Failures</p>
        <v-icon class="death-save" @click="toggleDeathSave('failure', '1')">{{ getDeathSave("failure", "1") }}</v-icon>-<v-icon class="death-save" @click="toggleDeathSave('failure', '2')">{{ getDeathSave("failure", "2") }}</v-icon>-<v-icon class="death-save" @click="toggleDeathSave('failure', '3')">{{ getDeathSave("failure", "3") }}</v-icon>
      </td>
    </tr>
    <tr>
      <td class="border"><b>Proficiency Bonus</b><br>{{ stats.proficiency_bonus}}</td>
      <td class="ac"><b>Armor Class</b><br>{{ calculateAC(armor, stats.dexterity) }}</td>
      <td class="border"><b>Speed</b><br>{{ stats.speed }}</td>
    </tr>
    <tr>
      <td class="border"><b>Initiative</b><br>{{ 2 }}</td>
      <td class="border"><b>Hit Dice</b></td>
      <td><button class="button reset-button" @click="resetSession">RESET</button></td>
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
      this.$emit('update-hp', [['session', 'hp'], newValue]);
    },
    getDeathSave(successOrFailure, number) {
      if (this.session.death_saves) {
        const yes = successOrFailure === "success" ? "mdi-alpha-s-circle" : "mdi-alpha-f-circle";
        const no = successOrFailure === "success" ? "mdi-alpha-s-circle-outline" : "mdi-alpha-f-circle-outline"
        return this.session.death_saves[successOrFailure][number] ? yes : no;
      }
    },
    toggleDeathSave(successOrFailure, number) {
      this.$emit('update-deathsave', [successOrFailure, number, !this.session.death_saves[successOrFailure][number]])
    }
  },
  computed: {
    hpPercentage: function() {
      if (this.stats.max_hp) {
        return parseInt(this.session.hp)/parseInt(this.stats.max_hp)*100
      } else return 0
    },
    hpPercentageColor: function() {
      if (this.stats.max_hp) {
        const hpPercentage = parseInt(this.session.hp)/parseInt(this.stats.max_hp)*100;
        if (hpPercentage<25) return "red darken-4";
        else return "green lighten-3"
      } else return "green lighten-3"
    }
  }
}
</script>

<style>
#session {
  padding: 5px;
  font-size: 20px;
  background-image: url('../assets/fancy_frame.png');
  background-size: 100% 100%;
  padding: 50px 30px;
}

#session table {
  text-align: center;
  collapse-border: collapse;
}

#session td {
  padding: 10px;
}

td.border {
  background-image: url('../assets/frame.png');
  background-size: 100% 100%;
}

#session b {
  font-size: 11px;
}

#session .hp-cell {
  margin: 0px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 50px;
}

#session .current-hp-row {
  display: flex;
  flex-direction: row;
  height: 20px;
}

#session .current-hp {
  border-bottom: 1px black solid;
  padding: 0px 5px;
}

#session .hp {
  font-size: 14px;
}

#session td.ac {
  background-image: url('../assets/shield.png');
  background-size: 100% 100%;
  padding: 0px 7px;
}

#session button.reset-button {
  border: 2px outset crimson;
  border-radius: 5px;
  padding: 5px;
  box-shadow: 2px 2px 5px grey;
}

#session button.reset-button:hover {
  border: 2px solid darkred;
  background-color: darkred;
  color: white;
}

#session .death-save:hover {
  cursor: pointer;
}

#session .mini-header {
  font-size: 8px;
  padding: 0px 5px;
  margin: 0px;
  text-align: left;
}
</style>
