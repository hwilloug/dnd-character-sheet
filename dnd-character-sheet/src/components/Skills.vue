<template>
<div id="skills">
  <SkillRow
    class='skill-row'
    v-for='skill in skillsArray'
    :key='skill.skillName'
    :skillName="skill.skillName"
    :skillType="skill.skillType"
    :skillModifier="calculateModifier(stats[skill.skillType.toLowerCase()], proficiencies[skill.skillName], stats.proficiency_bonus)"
    :skillProficiency="proficiencies[skill.skillName]"
    :skillExpertise="expertise[skill.skillName]"
    :skillDescription="skill.skillDescription"
  />
</div>
</template>

<script>
// idea: change modifier background color based on its value
import SkillRow from './subcomponents/SkillRow'
import SkillInfo from './json/skillInformation.json'
import Methods from './methods.js'

export default {
  name: "Skills",
  props: ["stats", "proficiencies", "expertise"],
  components: {SkillRow},
  data() {return {
    skillsArray: SkillInfo.data
  }},
  methods: {
    calculateModifier: Methods.calculateModifier
  }
}
</script>

<style>
  #skills {
    /* find a better background for this */
    /*border: black 2px solid;*/
    background-image: url('../assets/text_box_rope.png');
    background-size: 100% 100%;
    border-radius: 5px;
    padding: 50px;
  }

  #skills .skill-row {
    display: flex;
  }

  #skills .skill-row:hover {
    background-color: antiquewhite;
  }

  .skill-modifier {
    margin: 2px 5px 2px 2px;
    padding: 0px 2px;
    border: darkred solid 1px;
    font-weight: bold;
    color: darkred;
  }

  .skill-name {
    margin: 2px;
  }

</style>
