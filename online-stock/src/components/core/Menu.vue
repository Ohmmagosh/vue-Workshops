<template>
  <v-navigation-drawer app absolute permanent left>
    <router-link to="/" exact>
      <v-img src="../../assets/vue_display.jpg" alt="" width="100%"></v-img>
    </router-link>
    <v-divider></v-divider>
    <v-list shaped>
      <v-list-item-group v-model="selectedMenu" mandatory color="primary">
        <v-list-item
          v-for="([icon, title, route], index) in menus"
          :key="index"
          link
         
        >
          <v-list-item-icon>
            <v-icon>
              {{ icon }}
            </v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-tile-title>
              {{ title }}
            </v-list-tile-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name : 'Menu',
  methods: {
    
  },
  data() {
    return {
      selectedMenu: 0,
      menus: [
        ["mdi-apps-box", "Stock", "/stock"],
        ["mdi-chart-areaspline", "Report", "/report"],
        ["mdi-file-document", "About", "/about"],
      ],
    };
  },
};
</script>
<style></style>
