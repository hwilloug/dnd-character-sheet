<template>
  <div>
    <div class="flex flex-centered">
      <div class="flex-50">
        <Cantrips
          :cantrips="attacks.cantrips"
          :level="characterInfo.level"
          v-if="checkLength(attacks.cantrips)"
        />
        <Spells
          :spells="attacks.spells"
          v-if="checkLength(attacks.spells)"
        />
        <Weapons
          v-if="checkLength(attacks.weapons)"
          :weapons="attacks.weapons"
          :ammunition="attacks.ammunition"
          @update-sheet="updateSheet"
        />
      </div>
      <div id="flex-50">
        <Features
          :features="features"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Cantrips from '@/components/Cantrips';
import Spells from '@/components/Spells';
import Weapons from '@/components/Weapons';
import Features from '@/components/Features';

export default {
  name: 'Attacks',
  props: [
    'proficiencies',
    'attacks',
    'characterInfo',
    'features'
  ],
  components: {
    Cantrips,
    Spells,
    Weapons,
    Features
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
    checkLength(field) {
      if (field) {
        return field.length > 0
      } else return false
    },
  }

}
</script>

<style>

</style>
