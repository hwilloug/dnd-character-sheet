<template>
<div class="tooltip">
  <span class="skill-modifier">{{ skillModifier }}</span>
  <span class="skill-name ">{{ skillName }}</span>
  <span class="proficiency"><v-icon color="red darken-4">{{ skillProficiency ? "mdi-alpha-p-circle" : "" }}</v-icon></span>
  <span class="expertise"><v-icon color="brown">{{ skillExpertise ? "mdi-alpha-e-circle" : "" }}</v-icon></span>
    <!-- Hovering stuff -->
    <span class="tooltiptext tooltiplong"><i>{{ skillType }}</i><br>
    {{ skillDescription }}</span>
</div>
</template>

<script>
  export default {
    name: "SkillRow",
    props: ["skillName", "skillType", "skillModifier", "skillProficiency", "skillExpertise", "skillDescription"]
  }
</script>
