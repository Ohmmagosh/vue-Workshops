<template>
  <v-container>
    <v-row>
      <v-col lg="3" md="6" sm="12" cols="12">
        <stock-card title="TOTAL" subtitle="1,800" avatar_bg="#00a65a" avatar_ic="mdi-cart"/>
      </v-col>
      <v-col lg="3" md="6" sm="12" cols="12">
        <stock-card title="SOLD-OUT" subtitle="12" avatar_bg="#f39c12" avatar_ic="mdi-flask-empty-outline"/>
      </v-col>
      <v-col lg="3" md="6" sm="12" cols="12">
        <stock-card title="RETURN" subtitle="2" avatar_bg="#dd4b39" avatar_ic="mdi-keyboard-return"/>
      </v-col>
      <v-col lg="3" md="6" sm="12" cols="12">
        <stock-card title="DISCOUNT" subtitle="101" avatar_bg="#00c0ea" avatar_ic="mdi-cart"/>
      </v-col>
      
    </v-row>
  </v-container>
</template>

<script>
import StockCard from '../components/card/StockCard.vue'
export default {
  name: "Stock",
  components: {
    StockCard
  }
}
</script>

<style>

</style>