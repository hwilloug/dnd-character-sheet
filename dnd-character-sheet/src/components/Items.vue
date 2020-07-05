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
      :key="`${rerender}-1`"
      @update-sheet="updateSheet"
      @remove-item="removeItem"
    ></ItemExpansionPanel>
    <ItemExpansionPanel
      :items="items"
      :favorite="false"
      :headerColor="'white'"
      :key="`${rerender}-2`"
      @update-sheet="updateSheet"
      @remove-item="removeItem"
    ></ItemExpansionPanel>
  </v-expansion-panels>
  <hr>
  <div class="new-item-button" @click="toggleAddItem">
    <button><v-icon color="black">{{ addItemButton.logo }}</v-icon>{{ addItemButton.text }}</button>
  </div>
  <div v-if="addItem" class="new-item">
    <label for="item-name">Item Name</label><input v-model="newItem.name" id="item-name"/>
    <label for="item-favorite">Favorite</label><input v-model="newItem.favorite" id="item-favorite" type="checkbox"/>
    <label for="item-number">Number</label><input v-model="newItem.number" id="item-number" type="number" size="3" /><br>
    <label for="item-notes">Notes</label><textarea v-model="newItem.notes" id="item-notes"/><br>
    <button @click="submitItem">Add Item</button>
  </div>
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
  data() {return {
    newItem: {
      name: "",
      favorite: false,
      notes: "",
      number: ""
    },
    addItem: false,
    addItemButton: {
      logo: 'mdi-pen-plus',
      text: 'Add Item'
    },
    rerender: 1
  }},
  methods: {
    updateSheet(val) {
      this.$emit('update-sheet', val);
    },
    updateCoinAmount(coin) {
      this.updateSheet([['items', 'money', coin], this.items.money[coin]])
    },
    toggleAddItem() {
      this.addItem = !this.addItem;
      this.addItemButton = this.addItem == false ? {logo: 'mdi-pen-plus', text: 'Add Item'} : {logo: 'mdi-format-color-marker-cancel', text: 'Cancel'};
    },
    submitItem() {
      const newItemInfo = {
        "favorite": this.newItem.favorite,
        "notes": this.newItem.notes,
        "number": this.newItem.number
      };

      this.items.adventuring_gear[this.newItem.name] = newItemInfo;

      this.updateSheet(
        [['items', 'adventuring_gear'],
        this.items.adventuring_gear]
      )

      this.rerender += 1;

      this.newItem.name = "";
      this.newItem.favorite = false;
      this.newItem.notes = "";
      this.newItem.number= "";
    },
    removeItem(itemName) {
      delete this.items.adventuring_gear[itemName]
      this.updateSheet([['items', 'adventuring_gear'], this.items.adventuring_gear])
      this.rerender += 1;
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

.new-item-button {
  text-align: center;
  margin-top: 10px;
}

.new-item-button:hover {
  cursor: pointer;
}

#items .new-item input, .new-item textarea {
  border: 1px ridge lightgrey;
  border-radius: 2px;
  margin: 5px;
}

</style>
