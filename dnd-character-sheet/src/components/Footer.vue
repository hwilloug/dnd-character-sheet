<template>
  <v-footer absolute color="red darken-4 white--text">
    Project Hannah &copy;{{ new Date().getFullYear() }}
    <v-spacer></v-spacer>
    Powered by: 
    <img src="../assets/vue_logo.png" height="17px" style="padding-right: 10px; padding-left: 10px;">
    <img src="../assets/vuetify_logo.png" height="17px" stle="padding-right: 10px;">
    <img src="../assets/node_logo.png" height="20px">
  </v-footer>
</template>

<script>
  export default {
    name: "footer"
  }
</script>
