<template>
  <div>
  <v-expansion-panel
    v-for="item in getItems"
    :key="item"
  >
    <v-expansion-panel-header
      v-if="items.adventuring_gear[item]['favorite'] === favorite"
      class='panel-header'
      color="black white--text"
    ><b>{{ item }}</b><v-spacer></v-spacer>{{ items.adventuring_gear[item]['number'] }}</v-expansion-panel-header>
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
    breakJsonText: Methods.breakJsonText
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
