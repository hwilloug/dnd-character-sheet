<template>
<div id="stats">
  <StatBlock
    v-for="stat in statNames"
    :key="stat"
    :statName="stat"
    :statValue="stats[stat.toLowerCase()]"
    :statModifier="calculateModifier(stats[stat.toLowerCase()])"
  />
</div>
</template>

<script>
  import StatBlock from './StatBlock'
  import Modifiers from './json/modifiers.json'

  export default {
    name: "Stats",
    props: ["stats"],
    components: {
      StatBlock
    },
    data() {return {
      statNames: [
        "Strength",
        "Dexterity",
        "Constitution",
        "Intelligence",
        "Wisdom",
        "Charisma"
      ]
    }},
    methods: {
      calculateModifier(value) {
        return Modifiers[value]
      }
    }
  }
</script>

<style>
 #stats {
   justify-content: center;
 }

  #stats .stat {
    text-align: center;
    display: flex;
    flex-direction: column;
    margin: 5px;
    padding: 18px 5px;
    background-image: url('../assets/cracked_scroll.png');
    background-size: 100% 100%;
  }

  #stats .stat .statName {
    font-weight: bold;
    color: darkred;
  }

  #stats .stat .statValue {
    border-bottom: darkred 2px solid;
  }

  #stats .stat .statModifier {
    border: 1px solid darkred;
    font-weight: bold;
    color: darkred;
  }
</style>
