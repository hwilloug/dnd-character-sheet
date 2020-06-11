Items<template>
<div id="items">
  <h2>Items</h2>

  <h3>Adventuring Gear</h3>
  <v-expansion-panels
    :multiple=true
    :hover=true
    id="item-expansion-panel"
  >
    Favorites
    <ItemExpansionPanel
      :items="items"
      :favorite="true"
      @update-notes-inner="updateNotes"
      @toggle-favorite="toggleFavorite"
    ></ItemExpansionPanel>
    Other
    <ItemExpansionPanel
      :items="items"
      :favorite="false"
      @update-notes-inner="updateNotes"
      @toggle-favorite="toggleFavorite"
    ></ItemExpansionPanel>
  </v-expansion-panels>
</div>
</template>

<script>
import ItemExpansionPanel from './subcomponents/ItemExpansionPanel'

export default {
  name: "Items",
  props: ["items"],
  components: {
    ItemExpansionPanel
  },
  methods: {
    updateNotes(val) {
      this.$emit('update-notes', val)
    },
    toggleFavorite(val) {
      this.$emit('toggle-favorite', val)
    }
  }
}
</script>

<style>
#items {
  padding: 10px;
  background-color: white;
  border: 1px solid black;
  border-radius: 5px;
}

#items textarea {
  padding-top: 10px;
  width: 100%;
  height: 100px;
  border: 1px dashed darkred;
  resize: none;
}

.v-expansion-panel {
  width: 500px;
}

.v-expansion-panel-header {
  min-height: 30px;
  padding: 10px 15px;
  justify-content: flex-start;
}

#favorite-star.v-icon.v-icon {
  display: inline;
  max-width: 40px;
}

#favorite-star:hover {
  color: darkred;
}
</style>
