<template>
<div id="proficiencies">
<h5>Proficiencies</h5>
<div id="proficiencies-container">
<p class="armor proficiency-item"><b>Armor:</b>
  <span class="proficiency" :class="{ proficient: proficiencies.armor.light }">Light</span>
  <span class="proficiency" :class="{ proficient: proficiencies.armor.medium }">Medium</span>
  <span class="proficiency" :class="{ proficient: proficiencies.armor.heavy }">Heavy</span>
  <span class="proficiency" :class="{ proficient: proficiencies.armor.shields }">Shields</span>
</p>

<p class="weapons proficiency-item"><b>Weapons:</b>
<span class="proficiency" :class="{ proficient: proficiencies.weapons.simple }">Simple</span>
<span class="proficiency" :class="{ proficient: proficiencies.weapons.martial }">Martial</span>
<span class="proficiency weapons-other" v-if="proficiencies.weapons.other.length">
  <span
    v-for="weapon in proficiencies.weapons.other"
    :key="weapon"
    class="proficiency proficient"
  >{{ weapon }}</span>
</span>
</p>

<p class="languages proficiency-item"><b>Languages:</b>
<span
  v-for="language in proficiencies.languages"
  :key="language"
  class="proficiency proficient"
>{{ language }}</span>
</p>

<p class="tools proficiency-item"><b>Tools and Others:</b>
<span
  v-for="tool in proficiencies.tools"
  :key="tool"
  class="proficiency proficient"
>{{ tool }}</span>
</p>
</div>
</div>
</template>


<script>
export default {
  name: "Proficiencies",
  props: ["proficiencies"]
}
</script>

<style>
#proficiencies {
  background-image: url('../assets/text_frame_3.jpg');
  background-size: 100% 100%;
  width: 18rem;
}

#proficiencies h5 {
  text-align: center;
  padding: 10px 0px 0px 0px;
}

#proficiencies-container {
  padding: 15px 15px 30px 15px;
}

.proficiency-item {
  margin: 5px;
  padding: 2px;
  display: flex;
  flex-wrap: wrap;
}

.proficiency-item b {
  border-bottom: 2px solid darkred;
}

.weapons-other {
  display: flex;
  flex-wrap: wrap;
  color: black;
}

.proficiency {
  margin: 0px 7px;
  color: lightgrey;
}

.proficient {
  font-weight: bold;
  color: darkred;
  border: 1px darkred dotted;
  padding: 2px;
}
</style>
