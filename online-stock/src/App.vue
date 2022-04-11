<template>
  <v-app>
    <Header v-if="$store.state.isLogged"/>
    <Menu v-if="$store.state.isLogged" />
    <Content/>
  </v-app>
</template>

<script>
import Header from './components/core/Header.vue'
import Menu from './components/core/Menu.vue'
import Content from './components/core/Content.vue'
export default {
  name: 'App',
  components: {
    Header,
    Menu,
    Content
  },
  mounted() {
    this.$store.dispatch({ type : "restoreLogin"});
  },
}
</script>

<style>

</style>