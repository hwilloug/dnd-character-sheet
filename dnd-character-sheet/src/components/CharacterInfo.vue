<template>
<div id="character-info">
  <h1>{{ characterInfo.character_name }} "{{ characterInfo.character_nickname}}" {{ characterInfo.clan_name}}</h1>
  <v-spacer></v-spacer>
  <p>
    <span class="header"><b>Class</b></span>
    <span>{{ characterInfo.class }}</span>
  </p>
  <p>
    <span class="header"><b>Background</b></span>
    <span>{{ characterInfo.background }}</span>
  </p>
  <p>
    <span class="header"><b>Race</b></span>
    <span>{{ characterInfo.race }}</span>
  </p>
  <p>
    <span class="header"><b>Level</b></span>
    <span><v-btn
      class="mx-2"
      depressed
      dark
      height="15px"
      width="15px"
      fab
      color="red darken-4"
      @click="emitChange('decrement')"
    ><v-icon x-small>mdi-minus</v-icon></v-btn>
    <span class="tooltip">{{ characterInfo.level }}
      <span class="tooltiptext">XP to level up: {{ levelUpAtExperience() }}</span>
    </span>
    <v-btn
      class="mx-2"
      depressed
      dark
      height="15px"
      width="15px"
      fab
      color="red darken-4"
      @click="emitChange('increment')"
    ><v-icon x-small>mdi-plus</v-icon></v-btn></span>
  </p>
  <p>
    <span class="header"><b>Experience</b></span>
    <span><input v-model="characterInfo.experience" size="5"></span>
  </p>
</div>
</template>

<script>
/*
  Ideas for later:
    - Automatically set level based on experience
*/
export default {
  name: "characterInfo",
  props: [
    "characterInfo"
  ],
  data() {return {
    experience: "",
  }},
  mounted() {
    this.experience = this.characterInfo.experience;
  },
  methods: {
    emitChange(whichWay) {
      this.$emit('clicked', [['character_info', 'level'], whichWay, this.characterInfo.level]);
    },
    updateText(val) {
      this.$emit('update-text', [['character_info', 'experience'], val]);
    },
    levelUpAtExperience() {
      const levelUpAtExperience = {
        "1": 300,
        "2": 900,
        "3": 2700,
        "4": 6500,
        "5": 14000,
        "6": 23000,
        "7": 34000,
        "8": 48000,
        "9": 64000
      };
      return levelUpAtExperience[this.characterInfo.level]
    }
  },
  watch: {
    experience: {handler: 'updateText'}
  }
}
</script>

<style>
#character-info {
  padding: 10px;
  padding-top: 30px;
}

#character-info h1 {
  padding: 20px 50px;
  background-image: url('../assets/small_scroll_horizontal.png');
  background-size: 100% 100%;
}

#character-info p {
  display: flex;
  flex-flow: column nowrap;
  padding: 15px;
  text-align: center;
  align-items: stretch;
  background-image: url('../assets/small_scroll.png');
  background-size: 100% 100%;
}
#character-info p .header {
  border-bottom: solid darkred 2px;
}
#character-info input {
  text-align: center;
}

.tooltip {
  position: relative;
  display: inline-block;
}

.tooltip .tooltiptext {
  visibility: hidden;
  width: 120px;
  background-color: black;
  color: #fff;
  text-align: center;
  padding: 5px 0;
  border-radius: 6px;

  /* Position the tooltip text - see examples below! */
  position: absolute;
  top: 100%;
  left: 50%;
  z-index: 1;
}

/* Show the tooltip text when you mouse over the tooltip container */
.tooltip:hover .tooltiptext {
  visibility: visible;
}

</style>
