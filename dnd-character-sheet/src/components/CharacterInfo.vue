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
    <span class="tooltip">{{ characterInfo.level }}
      <span class="tooltiptext tooltipshort">XP to level up: {{ levelUpAtExperience() }}</span>
    </span>
  </p>
  <p>
    <span class="header"><b>Experience</b></span>
    <span><input v-model="characterInfo.experience" size="5" @keyup="updateText"></span>
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
  methods: {
    updateText() {
      this.$emit('update-text', [['character_info', 'experience'], this.characterInfo.experience]);
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
  padding: 30px 50px 20px 50px;
  background-image: url('../assets/flat_scroll.png');
  background-size: 100% 100%;
}

#character-info p {
  display: flex;
  flex-flow: column nowrap;
  padding: 20px 15px 15px 15px;
  width: 8rem;
  height: 5.5rem;
  text-align: center;
  align-items: stretch;
  background-image: url('../assets/small_scroll.png');
  background-size: 100% 100%;
  margin: 0px 20px;
}
#character-info p .header {
  border-bottom: solid darkred 2px;
}
#character-info input {
  text-align: center;
}

</style>
