<template>
<div class="stat">
  <span class="statName">{{ statName }}</span>
  <span class="statValue">{{ statValue }}</span>
  <span class="statModifier">{{ statModifier }}</span>
</div>
</template>

<script>
  export default {
    name: "StatBlock",
    props: ["statName", "statValue", "statModifier"]
  }
</script>
