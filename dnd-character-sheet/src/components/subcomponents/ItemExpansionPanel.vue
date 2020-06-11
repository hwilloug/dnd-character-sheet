<template>
  <div>
  <v-expansion-panel
    v-for="item in getItems"
    :key="item"
  >
    <v-expansion-panel-header
      v-if="checkIfFavorite(item) === favorite"
      id='panel-header'
      color="white"
    >
      <v-icon
        id="favorite-star"
        @click="toggleFavorite(item)"
      >{{ checkIfFavorite(item) ? "mdi-star" : "mdi-star-outline" }}</v-icon>
      <b id="item-name">{{ item }}</b>
      <v-spacer></v-spacer><v-spacer></v-spacer><v-spacer></v-spacer><v-spacer></v-spacer>
      {{ items.adventuring_gear[item]['number'] }}<v-spacer></v-spacer>
    </v-expansion-panel-header>
    <v-expansion-panel-content class='panel-content'>
      <div v-if="getItemInfo(item)">
        <p><b>Type:</b> {{ getItemInfo(item).subtype }}</p>
        <p><b>Rarity:</b> {{ getItemInfo(item).rarity }}</p>
        <p><b>Weight:</b> {{ getItemInfo(item).weight }}</p>
        <p><b>Description:</b> <p v-for="paragraph in breakJsonText(getItemInfo(item).description)" :key="paragraph">{{ paragraph }}</p>
      </div>
      Notes:<br>
      <textarea name="note" v-model="items.adventuring_gear[item]['notes']" @keyup="updateNotes(item)"></textarea>
    </v-expansion-panel-content>
  </v-expansion-panel>
</div>
</template>

<script>
import Items from '../json/items.json'
import Methods from '../methods.js'

export default {
  name: "ItemExpansionPanel",
  props: ["items", "favorite"],
  methods: {
    updateNotes(item) {
      this.$emit('update-notes-inner', [item, this.items.adventuring_gear[item].notes])
    },
    getItemInfo(item) {
      if (this.items.adventuring_gear) {
        return Items[item]
      } else return {}
    },
    breakJsonText: Methods.breakJsonText,
    checkIfFavorite(item) {
      if (this.items.adventuring_gear) {
        return this.items.adventuring_gear[item]['favorite'] === true
      } else return false
    },
    toggleFavorite(item) {
      if (this.items.adventuring_gear){
        this.$emit('toggle-favorite', [item, !this.items.adventuring_gear[item]['favorite']])
      }
    }
  },
  computed: {
    getItems: function() {
      if (this.items.adventuring_gear) {
        return Object.keys(this.items.adventuring_gear)
      } else return []
    }
  }
}
</script>