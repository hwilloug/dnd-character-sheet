<template>
  <v-footer absolute color="red darken-4 white--text">
    Poppy.play &copy;{{ new Date().getFullYear() }}
    <img src="../assets/poppy_transparent.gif" height="30px" style="padding-left: 5px;" />
    <v-spacer></v-spacer>
    Powered by:
    <img src="../assets/vue_logo.png" height="17px" style="padding-right: 9px; padding-left: 10px;">
    <img src="../assets/vuetify_logo.png" height="17px">
    <img src="../assets/node_logo.png" height="20px" >
  </v-footer>
</template>

<script>
  export default {
    name: "page-footer"
  }
</script>
