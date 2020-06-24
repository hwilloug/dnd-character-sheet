<template>
<div id="other-character-info">
  <h2>More Character Information</h2>
  <div>
  <div class="appearance">
    <span><p><b>Age</b></p><p>{{ otherInfo['age'] }}</p></span>
    <span><p><b>Gender</b></p><p>{{ otherInfo['gender'] }}</p></span>
    <span><p><b>Size</b></p><p>{{ otherInfo['size'] }}</p></span>
    <span><p><b>Height</b></p><p>{{ otherInfo['height'] }}</p></span>
    <span><p><b>Weight</b></p><p>{{ otherInfo['weight'] }}</p></span>
    <span><p><b>Hair</b></p><p>{{ otherInfo['hair'] }}</p></span>
    <span><p><b>Eyes</b></p><p>{{ otherInfo['eyes'] }}</p></span>
    <span><p><b>Skin</b></p><p>{{ otherInfo['skin'] }}</p></span>
  </div>
  <div class="mid-section">
    <div class="right-section">
      Character image?<br>
      Racial Traits?
    </div>
    <div class="middle-section">
      <div class="enemies-allies">
        <div class="enemies">
          <i>Enemies</i>
          <ul>
            <li v-for="enemy in otherInfo.enemies" :key="enemy">{{ enemy }}</li>
          </ul>
          <span v-if="otherInfo.enemies.length === 0">None</span>
        </div>
        <div class="allies">
          <i>Allies and Organizations</i>
          <ul>
            <li v-for="ally in otherInfo.allies_organizations" :key="ally">{{ ally }}</li>
          </ul>
          <span v-if="otherInfo.allies_organizations.length === 0">None</span>
        </div>
      </div>
      <div class="history">
        <b>Character History</b>
        <textarea
          class="character-history"
          v-model="otherInfo.character_history"
          @keyup="updateCharacterHistory()"
        ></textarea>
      </div>
    </div>
    <div class="personality">
      <span><p><b>Alignment</b></p><p>{{ otherInfo['alignment'] }}</p></span>
      <span><p><b>Faith</b></p><p>{{ otherInfo['faith'] }}</p></span>
      <span><p><b>Personality Traits</b></p><p>{{ otherInfo['personality_traits'] }}</p></span>
      <span><p><b>Ideals</b></p><p>{{ otherInfo['ideals'] }}</p></span>
      <span><p><b>Bonds</b></p><p>{{ otherInfo['bonds'] }}</p></span>
      <span><p><b>Flaws</b></p><p>{{ otherInfo['flaws'] }}</p></span>
    </div>
  </div>
</div>
</div>
</template>

<script>
export default {
  name: "OtherCharacterInfo",
  props: ["otherInfo"],
  computed: {
    getOtherInfo: function() {
      if (this.otherInfo) {
        return Object.keys(this.otherInfo)
      } else return []
    }
  },
  methods: {
    formatInfoHeader(text) {
      if (text) {
        if (text.indexOf('_') !== -1) return text.replace('_', ' ').toUpperCase();
        else return text.toUpperCase()
      } else return ""
    },
    checkIfEmpty(text) {
      if(this.otherInfo) {
        if (!this.otherInfo[text]) return false
        else return true
      } else return false
    },
    updateCharacterHistory() {
      this.$emit('update-character-history', this.otherInfo.character_history)
    }
  }
}
</script>

<style>
#other-character-info {
  border: 2px dotted black;
  border-radius: 10px;
  padding: 10px;
}

.other-info-container {
  display: flex;
  flex-flow: row wrap;
}

.appearance {
  margin: 15px;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
}

.appearance b {
  font-size: 12px;
  border-bottom: 2px solid darkred;
}

.appearance span {
  text-align: center;
  margin: 10px;
  padding: 5px;
  background-image: url('../assets/small_scroll_2.png');
  background-size: 100% 100%;
  padding: 5px 25px 15px 25px;
}

.appearance p {
  margin: 0px !important;
}

.personality {
  text-align: center;
  flex: 0 0 30%;
  margin: 10px;
}

.middle-section {
  flex: 0 0 40%;
  margin: 10px;
  display: flex;
  flex-direction: column;
}

.right-section {
  flex: 1;
  background-color: white;
  border: 1px solid black;
  margin: 10px;
}

.personality span {
  display: inline-block;
  margin: 4px;
  background-image: url('../assets/basic_frame.png');
  background-size: 100% 100%;
  padding: 10px;
  width: 100%;
}

.personality b {
  font-size: 15px;
  border-bottom: 2px solid darkred;
}

.personality p {
  margin-bottom: 2px !important;
}

.mid-section {
  display: flex;
}

.history {
  flex: 1;
  margin-top: 10px;
  background-color: white;
  padding: 10px;
  border: 3px inset black;
  border-radius: 10px;
}

.character-history {
  border-top: 2px solid darkred;
  padding: 10px;
  resize: none;
  width: 100%;
  height: 90%;
}

.enemies-allies {
  display: flex;
  flex-direction: row;
}

.enemies {
  flex: 0 0 49%;
  padding: 10px;
  margin: 0px 10px 10px 0px;
  background-color: white;
  border: 4px ridge black;
  border-radius: 10px;
}

.allies {
  flex: 1;
  padding: 10px;
  margin: 0px 0px 10px 10px;
  background-color: white;
  border: 4px ridge black;
  border-radius: 10px;
}


</style>
