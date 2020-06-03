<template>
<div id="character-info">
  <h1>{{ characterInfo.character_name }} "{{ characterInfo.character_nickname}}" {{ characterInfo.clan_name}}</h1>
  <p>Class: {{ characterInfo.class }}</p>
  <p>Background: {{ characterInfo.background }}</p>
  <p>Race: {{ characterInfo.race }}</p>
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
