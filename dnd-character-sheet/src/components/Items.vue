Items<template>
<div id="items">
  <h2>Items</h2>
  <v-expansion-panels
    :multiple=true
    :hover=true
  >
    <v-expansion-panel
      v-for="item in items.adventuring_gear"
      :key="item"
    >
      <v-expansion-panel-header
        class='panel-header'
        color="grey darken-3 white--text"
      ><b>{{ item }}</b></v-expansion-panel-header>
      <v-expansion-panel-content class='panel-content'>
        <textarea name="note">Notes will go here</textarea>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</div>
</template>

<script>

export default {
  // Need to check proficiencies
  name: "Items",
  props: ["items"],
  methods: {
  },
}
</script>

<style>
#items {
  padding: 10px;
  background-color: white;
  border: 1px solid black;
  border-radius: 5px;
  max-width: 48%;
}

</style>
