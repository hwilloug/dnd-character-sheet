<template>
  <v-btn
    class="mx-2"
    depressed
    dark
    height="10px"
    width="10px"
    fab
    color="red darken-4"
    @click="$emit('incremental-change', whichWay)"
  ><v-icon x-small class="increment-button">{{ whichWay === 'increase' ? 'mdi-plus' : 'mdi-minus' }}</v-icon></v-btn>
</template>

<script>
export default {
  name: 'incrementButton',
  props: ['whichWay']
}
</script>

<style>

</style>
