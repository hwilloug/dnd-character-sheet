<template>
<div id="session">
  <table>
    <tr>
      <td colspan="2" class="hp-cell-td">
        <b>HP</b><span class="hp-cell"><span class="current-hp-row">
        <IncreaseButton
          :whichWay="'decrease'"
          @incremental-change="emitChange('decrease', 'hp')"
          v-if="parseInt(session.hp) > 0"
          style="margin-top: 5px;" />
        <span v-else><v-icon height="10px" width="10px" style="padding-right: 2px;" fab>mdi-blank</v-icon></span>
        <span class="hp current-hp">{{ session.hp }}</span>
        <IncreaseButton
          :whichWay="'increase'"
          @incremental-change="emitChange('increase', 'hp')"
          v-if="parseInt(session.hp) < parseInt(stats.max_hp)"
          style="margin-top: 5px;"  />
        <span v-else><v-icon height="10px" width="10px" style="padding-left: 2px;" fab>mdi-blank</v-icon></span></span>
        <span class="hp">{{ stats.max_hp }}</span></span>
        <span class="hp-bar"><v-progress-linear
          height="15px"
          :color="hpPercentageColor"
          :value="hpPercentage('hp')"
        ></v-progress-linear></span>
        <span class="hp-bar"><v-progress-linear
          striped
          height="10px"
          color="purple lighten-3"
          background-opacity="0"
          :value="hpPercentage('temporary_hp')"
        ></v-progress-linear></span>
        <span><b>Temporary</b><span class="temporary-hp-row">
        <IncreaseButton
            :whichWay="'decrease'"
            @incremental-change="emitChange('decrease', 'temporary_hp')"
            v-if="parseInt(session.temporary_hp) > 0"/>
        <span v-else><v-icon height="10px" width="10px" style="padding-right: 2px;" fab>mdi-blank</v-icon></span>
        <span class="hp temp-hp">{{ session.temporary_hp }}</span>
        <IncreaseButton
          :whichWay="'increase'"
          @incremental-change="emitChange('increase', 'temporary_hp')" />
        </span></span>
      </td>
      <td class="border"><b>Death Saves</b><br>
        <p class="mini-header">Successes</p>
        <v-icon class="death-save" @click="toggleDeathSave('success', '1')">{{ getDeathSave("success", "1") }}</v-icon>-<v-icon class="death-save" @click="toggleDeathSave('success', '2')">{{ getDeathSave("success", "2") }}</v-icon>-<v-icon class="death-save" @click="toggleDeathSave('success', '3')">{{ getDeathSave("success", "3") }}</v-icon><br>
        <p class="mini-header">Failures</p>
        <v-icon class="death-save" @click="toggleDeathSave('failure', '1')">{{ getDeathSave("failure", "1") }}</v-icon>-<v-icon class="death-save" @click="toggleDeathSave('failure', '2')">{{ getDeathSave("failure", "2") }}</v-icon>-<v-icon class="death-save" @click="toggleDeathSave('failure', '3')">{{ getDeathSave("failure", "3") }}</v-icon>
      </td>
    </tr>
    <tr v-if="getLimitedFeaturesLength">
      <td colspan="3" class="limited-features">
        <span v-for="feature in Object.keys(session.limited_features)"
          :key="feature"
        ><p>
          <b class="feature-name">{{ feature }}: </b>
          <v-icon v-for="slot in getLimitedFeatureSlotNumber(feature)" :key="slot" class="limited-feature-icon" @click="toggleLimitedFeature(feature, slot)">{{ getLimitedFeatureSlot(feature, slot) }}</v-icon>
        </p></span>
      </td>
    </tr>
    <tr>
      <td class="border"><b>Proficiency Bonus</b><br>{{ stats.proficiency_bonus}}</td>
      <td class="ac"><b>Armor Class</b><br>{{ calculateAC(armor, stats.dexterity) }}</td>
      <td class="border"><b>Speed</b><br>{{ stats.speed }}</td>
    </tr>
    <tr>
      <td class="border"><b>Initiative</b><br>{{ session.initiative }}</td>
      <td class="border"><b>Hit Dice</b></td>
      <td><button class="button reset-button" @click="resetSession">RESET</button></td>
    </tr>
  </table>

</div>
</template>

<script>
import Methods from './methods.js'
import IncreaseButton from './subcomponents/IncreaseButton';

export default {
  name: "Session",
  props: ["session", "stats", "armor"],
  components: {
    IncreaseButton
  },
  methods: {
    calculateAC: Methods.calculateAC,
    resetSession() {
      this.$emit('reset-session')
    },
    emitChange(whichWay, category) {
      const newValue = Methods.increaseOrDecrease(this.session[category], whichWay)
      this.$emit('update-sheet', [['session', category], newValue]);
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
    },
    getNumberSlots(featureDict) {
      if (featureDict) {
        return Object.keys(featureDict.slots).length
      } else return 0
    },
    getLimitedFeatureSlotNumber(feature) {
      if (this.session.limited_features[feature]) {
        return Object.keys(this.session.limited_features[feature]).length
      } else return 0
    },
    getLimitedFeatureSlot(feature, slotNumber) {
      if (this.session.limited_features[feature]) {
        return this.session.limited_features[feature][slotNumber] === true ? "mdi-close-circle" : "mdi-circle-outline";
      } else return 0
    },
    toggleLimitedFeature(feature, slotNumber) {
      this.$emit('update-limitedfeature', [feature, slotNumber, !this.session.limited_features[feature][slotNumber]])
    },
    hpPercentage(category) {
      if (this.stats.max_hp) {
        return parseInt(this.session[category])/parseInt(this.stats.max_hp)*100
      } else return 0
    },
  },
  computed: {
    hpPercentageColor: function() {
      if (this.stats.max_hp) {
        const hpPercentage = parseInt(this.session.hp)/parseInt(this.stats.max_hp)*100;
        if (hpPercentage<25) return "red darken-4";
        else return "green lighten-3"
      } else return "green lighten-3"
    },
    getLimitedFeaturesLength: function() {
      if (this.session.limited_features) {
        return Object.keys(this.session.limited_features).length
      } else return false
    }
  }
}
</script>

<style>
#session {
  font-size: 20px;
  background-image: url('../assets/fancy_frame.png');
  background-size: 100% 100%;
  padding: 70px 30px;
}

#session table {
  text-align: center;
  collapse-border: collapse;
}

#session td {
  padding: 12px 15px;
}

td.border {
  background-image: url('../assets/simple_frame.png');
  background-size: 100% 100%;
}

#session b {
  font-size: 11px;
}

#session .hp-cell-td {
  background-image: url('../assets/frame.png');
  background-size: 100% 100%;
  padding: 10px 30px 20px 30px;
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

#session .inc-button {

}

#session .temp-hp {
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

#session td.limited-features {
  text-align: left;
  border: 3px double black;
  border-radius: 10px;
  padding: 0px 0px 0px 5px;
}

#session .limited-features p {
  margin: 0px;
}

.limited-feature-icon {
  margin-left: 5px;
}
</style>
