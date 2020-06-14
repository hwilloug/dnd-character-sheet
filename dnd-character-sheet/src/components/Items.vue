Items<template>
<div id="items">
  <h2>Items</h2>
  <div class="currencies">
    <div v-for="coin in getCurrencies" :key="coin" class="coin" :class="coin">
      <b>{{ coin }}</b><br>
      <input
        v-model="items.money[coin]"
        class="coin-amount"
        @keyup="updateCoinAmount(coin)"
      />
    </div>
  </div>
  <v-expansion-panels
    focusable accordion
    :hover=true
  >
    <ItemExpansionPanel
      :items="items"
      :favorite="true"
      :headerColor="'red darken-4 white--text'"
      @update-notes-inner="updateNotes"
      @toggle-favorite="toggleFavorite"
    ></ItemExpansionPanel>
    <ItemExpansionPanel
      :items="items"
      :favorite="false"
      :headerColor="'white'"
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
    },
    updateCoinAmount(coin) {
      this.$emit('update-coin-amount', [coin, this.items.money[coin]])
    }
  },
  computed: {
    getCurrencies: function() {
      if (this.items.money) {
        return Object.keys(this.items.money)
      } else return []
    }
  }
}
</script>

<style>
#items {
  padding: 10px;
  background-color: white;
  border: 7px double black;
  border-radius: 5px;
}

#items textarea {
  padding-top: 10px;
  width: 100%;
  height: 100px;
  border-top: 1px solid darkred;
  resize: none;
}

.v-expansion-panel {
  width: 500px;
}

.v-expansion-panel-header {
  min-height: 30px;
  padding: 10px 15px;
}

#favorite-star.v-icon.v-icon {
  max-width: 20px;
  max-height: 20px;
  color: lightgrey;
  margin: 0px 20px 0px 10px;
}

#favorite-star.v-icon.v-icon:hover {
  color: mediumseagreen;
}

.v-expansion-panel::before {
   box-shadow: none !important;
}

.v-expansion-panel-content {
  border: 1px solid darkgrey;
}

.currencies {
  display: flex;
  justify-content: center;
}

.coin {
  border-width: 3px;
  border-style: groove;
  border-radius: 10px;
  margin: 10px;
  padding: 10px;
  text-align: center;
}

.coin-amount {
  width: 35px;
  text-align: center;
}

.cp {
  border-color: darkgoldenrod;
  color: darkgoldenrod;
}

.sp {
  border-color: silver;
  color: silver;
}

.ep {
  border-color: darkgrey;
  color: darkgrey;
}

.gp {
  border-color: gold;
  color: gold;
}

.pp {
  border-color: gainsboro;
  color: gainsboro;
}

</style>
