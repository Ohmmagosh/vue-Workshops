<template>
  <v-app>
    <Header/>
    <Menu/>
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
  }
}
</script>

<style>

</style>