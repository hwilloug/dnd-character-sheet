<template>
<div id="character-info">
  <h1>{{ characterInfo.character_name }} "{{ characterInfo.character_nickname}}" {{ characterInfo.clan_name}}</h1>
  <v-spacer></v-spacer>
  <p><b>Class</b> {{ characterInfo.class }}</p>
  <p><b>Background</b> {{ characterInfo.background }}</p>
  <p><b>Race</b> {{ characterInfo.race }}</p>
</div>
</template>

<script>
export default {
  name: "characterInfo",
  props: [
    "characterInfo"
  ]
}
</script>

<style>
#character-info p {
  display: flex;
  flex-direction: column;
  padding: 15px;
  text-align: center;
}
#character-info p b {
  border-bottom: solid darkred 2px;
}
</style>
