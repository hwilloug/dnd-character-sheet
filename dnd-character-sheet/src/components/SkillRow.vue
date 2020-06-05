<template>
<div>
  <span class="skill-modifier">{{ skillModifier }}</span>
  <span class="skill-name tooltip">{{ skillName }}<span class="proficiency"><v-icon color="red darken-4">{{ skillProficiency ? "mdi-alpha-p-circle" : "" }}</v-icon></span>
  <span class="expertise"><v-icon color="red darken-4">{{ skillExpertise ? "mdi-alpha-e-circle" : "" }}</v-icon></span>
    <!-- Hovering stuff -->
    <span class="tooltiptext tooltiplong">{{ skillType }}<br>
    {{ skillDescription }}</span>
  </span>
</div>
</template>

<script>
  export default {
    name: "SkillRow",
    props: ["skillName", "skillType", "skillModifier", "skillProficiency", "skillExpertise", "skillDescription"]
  }
</script>
