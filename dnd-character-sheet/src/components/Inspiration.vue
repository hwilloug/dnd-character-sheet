<template>
<div id="inspiration">
  <IncreaseButton :whichWay="'decrease'" @incremental-change="changeInspiration" v-if="stats.inspiration > 0"/>
  <v-icon small v-else>mdi-blank</v-icon>
  <span class="inspiration">{{ stats.inspiration }}</span>
  <IncreaseButton :whichWay="'increase'" @incremental-change="changeInspiration" />
  <span>Inspiration</span>
</div>
</template>

<script>
import Methods from './methods.js'
import IncreaseButton from './subcomponents/IncreaseButton.vue'

export default {
  name: "Inspiration",
  props: ['stats'],
  components: {
    IncreaseButton
  },
  methods: {
    changeInspiration(value) {
      const newValue = Methods.increaseOrDecrease(this.stats.inspiration, value)
      this.$emit('update-sheet', [['stats', 'inspiration'], newValue])
    }
  }
}
</script>

<style>
#inspiration {
  background-image: url('../assets/text_frame_6.png');
  background-size: 100% 100%;
  padding: 30px 80px;
}

#inspiration .inspiration {
  border: 1px solid darkred;
  padding: 4px 10px;
  color: darkred;
  font-weight: bold;
}

</style>
