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
    <div class="personality">
      <span><p><b>Alignment</b></p><p>{{ otherInfo['alignment'] }}</p></span>
      <span><p><b>Personality Traits</b></p><p>{{ otherInfo['personality_traits'] }}</p></span>
      <span><p><b>Ideals</b></p><p>{{ otherInfo['ideals'] }}</p></span>
      <span><p><b>Bonds</b></p><p>{{ otherInfo['bonds'] }}</p></span>
      <span><p><b>Flaws</b></p><p>{{ otherInfo['flaws'] }}</p></span>
    </div>
    <div class="history">
      Character History
      <textarea
        class="character-history"
        v-model="otherInfo.character_history"
        @keyup="updateCharacterHistory()"
      ></textarea>
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
  background-color: white;
  flex: 0 0 50%;
  margin: 10px;
}

.personality span {
  margin: 4px;
}

.personality b {
  font-size: 15px;
  border-bottom: 2px solid darkred;
}

.personality p {
  margin-bottom: 2px !important;
}

.history {
  flex: 1;
  margin: 10px;
  background-color: white;
  padding: 10px;
}

.mid-section {
  display: flex;
}

.character-history {
  border-top: 2px solid darkred;
  padding: 10px;
  resize: none;
  width: 100%;
  height: 90%;
}

</style>
