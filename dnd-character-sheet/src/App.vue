<template>
  <div id="app">
    <Spells />
  </div>
</template>

<script>
import Spells from './components/Spells.vue'

export default {
  name: 'App',
  components: {
    Spells
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
