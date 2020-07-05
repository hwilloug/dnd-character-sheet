<template>
  <div>
  <v-expansion-panel
    v-for="(value, item, idx) in items.adventuring_gear"
    :key="idx"
  >
    <v-expansion-panel-header
      v-if="checkIfFavorite(item) === favorite"
      id='panel-header'
      :color="headerColor"
    >
      <v-icon
        id="favorite-star"
        @click="toggleFavorite(item)"
      >{{ checkIfFavorite(item) ? "mdi-star" : "mdi-star-outline" }}</v-icon>
      {{ item }}
      <v-spacer></v-spacer><v-spacer></v-spacer><v-spacer></v-spacer><v-spacer></v-spacer>
      {{ items.adventuring_gear[item]['number'] }}<v-spacer></v-spacer>
    </v-expansion-panel-header>
    <v-expansion-panel-content class='panel-content'>
      <div v-if="getItemInfo(item)">
        <p><b>Type:</b> {{ getItemInfo(item).subtype }}</p>
        <p><b>Rarity:</b> {{ getItemInfo(item).rarity }}</p>
        <p><b>Weight:</b> {{ getItemInfo(item).weight }}</p>
        <p><b>Description:</b><div class="description"><p v-for="paragraph in breakJsonText(getItemInfo(item).description)" :key="paragraph">{{ paragraph }}</p></div>
      </div>
      Notes:<br>
      <textarea name="note" v-model="items.adventuring_gear[item]['notes']" @keyup="updateNotes(item)"></textarea>
      <button @click.stop="dialog = true">
        <v-icon color="black">mdi-calendar-remove</v-icon>Delete Item
      </button>
      <v-dialog
         v-model="dialog"
         max-width="290"
       >
         <v-card>
           <v-card-title class="headline">Delete Item?</v-card-title>
           <v-card-text>
             Are you sure you want to delete this item?
           </v-card-text>
           <v-card-actions>
             <v-spacer></v-spacer>
             <v-btn
               color="green darken-1"
               text
               @click="dialog = false"
             >No</v-btn>
             <v-btn
               color="red darken-1"
               text
               @click="deleteItem(item)"
             >Yes</v-btn>
           </v-card-actions>
         </v-card>
       </v-dialog>
    </v-expansion-panel-content>
  </v-expansion-panel>
</div>
</template>

<script>
import Items from '../json/items.json'
import Methods from '../methods.js'

export default {
  name: "ItemExpansionPanel",
  props: ["items", "favorite", "headerColor"],
  data() { return {
    dialog: false
  }},
  methods: {
    updateSheet(route, val) {
      this.$emit('update-sheet', [route, val])
    },
    updateNotes(item) {
      this.updateSheet(['items', 'adventuring_gear', item, "notes"], this.items.adventuring_gear[item].notes);
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
      this.updateSheet(['items', 'adventuring_gear', item, 'favorite'], !this.items.adventuring_gear[item]['favorite']);
    },
    deleteItem(item) {
      this.$emit('remove-item', item)
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
