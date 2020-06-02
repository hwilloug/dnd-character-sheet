<template>
<div class="info-dropdown">
  <button class="collapsible">{{ spell.name }}</button> 
  <div class="content">
    <p>Level: {{ spell.level }}</p>
    <p>Casting time: {{ spell.casting_time }}</p>
    <p>Range: {{ spell.range }}</p>
    <p>Components: {{ spell.components }}</p>
    <p>Duration: {{ spell.duration }}</p>
    <p>Description: {{ spell.description }}</p>
  </div>
</div>
</template>

<script>
export default {
  name: "SpellInfo",
  props: ['spell'],
  data() { return {
    
  }},
}
</script>

<style>

.collapsible {
  background-color: crimson;
  color: white;
  width: 50%;
  cursor: pointer;
  border: none;
  font-size: 15px;
  outline: none;
  text-align: left;
}

.collapsible:hover {
  background-color: #97050f;
}

.content {
  width: 50%;
}

</style>
