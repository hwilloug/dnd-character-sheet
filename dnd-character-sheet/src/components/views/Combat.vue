<template>
  <div>
    <div id="sheet-container">
      <Stats
        :stats="stats"
      />
      <SavingThrows
        :savingThrows="savingThrows"
        :stats="stats" />
      <Skills
        :stats="stats"
        :proficiencies="proficiencies.skills" :expertise="proficiencies.expertise"
      />
      <Session
        :session="session"
        :stats="stats"
        :armor="armor"
        @update-sheet="updateSheet"
        @update-deathsave="updateDeathSave"
        @update-limitedfeature="updateLimitedFeature"
        @reset-session="resetSession"
      />
      <Proficiencies
        :proficiencies="proficiencies"
      />
      <Armor
        :armor="armor"
        :stats="stats"
        :proficiencies="proficiencies.armor"
      />
      <Inspiration
        :stats="stats"
        @update-sheet="updateSheet"
      />
      <AbilitySaveDc
        :abilitySaveDc="stats.ability_save_dc"
      />
    </div>
    <Attacks
      :attacks="attacks"
      :proficiencies="proficiencies"
      :characterInfo="characterInfo"
      :features="features"
    />
  </div>
</template>

<script>
import Stats from '@/components/Stats';
import Skills from '@/components/Skills';
import SavingThrows from '@/components/SavingThrows';
import Proficiencies from '@/components/Proficiencies';
import Session from '@/components/Session';
import Armor from '@/components/Armor';
import Inspiration from '@/components/Inspiration';
import AbilitySaveDc from '@/components/AbilitySaveDC';
import Attacks from '@/components/Attacks';

export default {
  name: 'Combat',
  props: [
    'stats',
    'savingThrows',
    'proficiencies',
    'armor',
    'attacks',
    'characterInfo',
    'session',
    'features'
  ],
  components: {
    Stats,
    SavingThrows,
    Skills,
    Session,
    Proficiencies,
    Armor,
    Inspiration,
    AbilitySaveDc,
    Attacks
  },
  methods: {
    updateSheet(val) {
      this.$emit('update-sheet', val);
    },
    updateDeathSave(val) {
      this.$emit('update-deathsave', val);
    },
    updateLimitedFeature(val) {
      this.$emit('update-limitedfeature', val);
    },
    resetSession(val) {
      this.$emit('reset-session', val);
    },
  }

}
</script>

<style>

</style>
