<template>
<div id="skills">
  <SkillRow
    class='skill-row'
    v-for='skill in skillsArray'
    :key='skill.skillName'
    :skillName="skill.skillName"
    :skillType="skill.skillType"
    :skillModifier="calculateModifier(stats[skill.skillType.toLowerCase()])"
    :skillProficiency="proficiencies[skill.skillName]"
    :skillDescription="skill.skillDescription"
  />
</div>
</template>

<script>
import SkillRow from './SkillRow'
import SkillInfo from './json/skillInformation.json'
import Modifiers from './json/modifiers.json'

export default {
  name: "Skills",
  props: ["stats", "proficiencies"],
  components: {SkillRow},
  data() {return {
    skillsArray: SkillInfo.data
  }},
  methods: {
    calculateModifier(value) {
      return Modifiers[value]
    }
  }
}
</script>

<style>
  #skills {
    /* find a better background for this */
    border: black 2px solid;
    border-radius: 5px;
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
