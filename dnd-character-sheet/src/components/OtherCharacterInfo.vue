<template>
<div id="other-character-info">
  <h2>More Character Information</h2>
  <div class="other-info-container">
  <span v-for="info in getOtherInfo" :key="info" class="other-info">
    <span v-if="checkIfEmpty(info)"><b>{{ formatInfoHeader(info) }}</b><p>{{ otherInfo[info] }}</p></span>
  </span>
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
    }
  }
}
</script>

<style>
#other-character-info {
  border: 1px solid black;
  border-radius: 10px;
  background-color: white;
  padding: 10px;
}

.other-info-container {
  display: flex;
  flex-flow: row wrap;
}

.other-info {
  margin: 15px;
}

.other-info b {
  font-size: 12px;
  border-bottom: 2px solid darkred;
}
</style>
