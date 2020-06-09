<template>
<div id="features">
  <h2>Features</h2>
  <div class="feature" v-for="feature in getFeatures" :key="feature">
    <div v-if="getFeatureType(feature) === 'string'">
      <b>{{ feature }}</b><br>
      {{ features[feature] }}
    </div>
    <div class="feature" v-if="getFeatureType(feature) === 'object'">
      <b>{{ feature }}</b><br>
      {{ features[feature].description }}
      <div class="subfeature" v-for="subfeature in getSubfeatures(feature)" :key="subfeature">
        <b>{{ subfeature }}</b><br>
        {{ features[feature][subfeature] }}
      </div>
    </div>
  </div>
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
  border: 1px solid black;
  border-radius: 10px;
  background-color: white;
  padding: 10px;
}

.feature {
  margin: 30px 10px;
}

.subfeature {
  margin: 10px 40px;
}
</style>
