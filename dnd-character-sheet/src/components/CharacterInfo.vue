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
    <span>{{ characterInfo.level }}</span>
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
export default {
  name: "characterInfo",
  props: [
    "characterInfo"
  ],
  data() {return {
    experience: ""
  }},
  created() {
    this.experience = this.characterInfo.experience;
  },
  methods: {
    emitChange(whichWay) {
      this.$emit('clicked', [['character_info', 'level'], whichWay, this.characterInfo.level]);
    },
    updateText(val) {
      console.log(val)
      this.$emit('update-text', [['character_info', 'experience'], val]);
    }
  },
  watch: {
    experience: {handler: 'updateText'}
  }
}
</script>

<style>
#character-info p {
  display: flex;
  flex-flow: column nowrap;
  padding: 15px;
  text-align: center;
  align-items: stretch;
}
#character-info p .header {
  border-bottom: solid darkred 2px;
}
#character-info input {
  text-align: center;
}

</style>
