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
        const modifier = {
          "1": "-5",
          "2": "-4",
          "3": "-4",
          "4": "-3",
          "5": "-3",
          "6": "-2",
          "7": "-2",
          "8": "-1",
          "9": "-1",
          "10": "0",
          "11": "0",
          "12": "+1",
          "13": "+1",
          "14": "+2",
          "15": "+2",
          "16": "+3",
          "17": "+3",
          "18": "+4",
          "19": "+4",
          "20": "+5",
          "21": "+5",
          "22": "+6",
          "23": "+6",
          "24": "+7",
          "25": "+7",
          "26": "+8",
          "27": "+8",
          "28": "+9",
          "29": "+9",
          "30": "+10"
        }
        return modifier[value]
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
</style>
