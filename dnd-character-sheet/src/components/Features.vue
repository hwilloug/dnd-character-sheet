<template>
<div id="features">
  <h2>Features</h2>
  <v-expansion-panels
    focusable accordion inset
    :hover=true
    :multiple=false
    dark
  >
    <v-expansion-panel v-for="feature in getFeatures" :key="feature">
      <v-expansion-panel-header
        class='panel-header'
        color="red darken-4 white--text"
      >
        <b>{{ feature }}</b>
      </v-expansion-panel-header>
      <v-expansion-panel-content
        color="grey lighten-4 black--text"
      >
        <div v-if="getFeatureType(feature) === 'string'" class="feature">
          {{ features[feature] }}
        </div>
        <div class="feature" v-if="getFeatureType(feature) === 'object'">
          {{ features[feature].description }}
          <div class="subfeature" v-for="subfeature in getSubfeatures(feature)" :key="subfeature">
            <b>{{ subfeature }}</b><br>
            {{ features[feature][subfeature] }}
          </div>
        </div>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</div>
</template>

<script>
export default {
  name: "Features",
  props: ["features"],
  computed: {
    getFeatures: function() {
      if (this.features) {
        return Object.keys(this.features);
      } else return []
    }
  },
  methods: {
    getFeatureType(feature) {
      if (this.features) {
        return typeof this.features[feature];
      } else return 'string'
    },
    getSubfeatures(feature) {
      if (this.features) {
        let subfeatures = Object.keys(this.features[feature]);
        const descriptionId = subfeatures.indexOf("description");
        if (descriptionId !== -1) subfeatures.splice(descriptionId, 1)
        return subfeatures
      } else return []
    }
  }
}
</script>

<style>
#features {
  border: 5px ridge black;
  border-radius: 10px;
  background-color: white;
  padding: 10px;
}

.feature {
  margin: 10px 10px;
}

.subfeature {
  margin: 10px 40px;
}
</style>
