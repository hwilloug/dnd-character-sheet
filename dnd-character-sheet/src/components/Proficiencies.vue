<template>
<div id="proficiencies">
<h5>Proficiencies</h5>
<div id="proficiencies-container">
<p class="armor proficiency-item"><i>Armor:</i>
  <span class="proficiency" :class="{ proficient: getProficiency('armor', 'light') }">Light</span>
  <span class="proficiency" :class="{ proficient: getProficiency('armor', 'medium') }">Medium</span>
  <span class="proficiency" :class="{ proficient: getProficiency('armor', 'heavy') }">Heavy</span>
  <span class="proficiency" :class="{ proficient: getProficiency('armor', 'shields') }">Shields</span>
</p>

<p class="weapons proficiency-item"><i>Weapons:</i>
<span class="proficiency" :class="{ proficient: getProficiency('weapons', 'simple') }">Simple</span>
<span class="proficiency" :class="{ proficient: getProficiency('weapons', 'martial') }">Martial</span>
<span class="proficiency weapons-other" v-if="otherWeaponsLength">
  <span
    v-for="weapon in proficiencies.weapons.other"
    :key="weapon"
    class="proficiency proficient"
  >{{ weapon }}</span>
</span>
</p>

<p class="languages proficiency-item"><i>Languages:</i>
<span
  v-for="language in proficiencies.languages"
  :key="language"
  class="proficiency proficient"
>{{ language }}</span>
</p>

<p class="tools proficiency-item"><i>Tools and Others:</i>
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
  // Replace bolding stuff with just putting what is proficient, and if nothing, none.
export default {
  name: "Proficiencies",
  props: ["proficiencies"],
  computed: {
    otherWeaponsLength: function() {
      if (this.proficiencies.weapons) {
        return this.proficiencies.weapons.other.length
      } else return ""
    }
  },
  methods: {
    getProficiency(object, item) {
      if (this.proficiencies[object]) {
        return this.proficiencies[object][item]
      } else return ""
    }
  }
}
</script>

<style>
#proficiencies {
  background-image: url('../assets/text_frame_3.png');
  background-size: 100% 100%;
  width: 21rem;
}

#proficiencies h5 {
  text-align: center;
  padding: 10px 0px 0px 0px;
}

#proficiencies-container {
  padding: 15px 15px 30px 15px;
}

.proficiency-item {
  margin: 2px;
  padding: 2px 2px 5px 2px;
  display: flex;
  flex-wrap: wrap;
}

.armor, .languages, .weapons {
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
