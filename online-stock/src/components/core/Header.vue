<template>
  <div>
    <v-app-bar
      app
      color="primary"
      dense

      dark
    >
      <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->

      <v-toolbar-title>Ohmaaagoch V {{version}}</v-toolbar-title>

      <v-spacer></v-spacer>
      <span>Username</span>
      <v-btn icon>
        <v-icon>mdi-export</v-icon>
      </v-btn>

     

      
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name : 'Header',
  computed: {
    version (){
      return "1.0"
    }
  },
}
</script>

<style>

</style>