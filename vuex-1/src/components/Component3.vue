<template>
  <div class="component3">
      <Component4 />
      <History />
  </div>
</template>

<script>
import History from './History.vue'
import Component4 from './Component4.vue'
export default {
    name: "component3",
    components:{
        Component4,
        History,
    }
}
</script>

<style>

</style>