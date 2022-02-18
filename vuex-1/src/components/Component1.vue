<template>
  <div class="component1">
    <Component2 />
  </div>
</template>

<script>
import Component2 from './Component2.vue'
export default {
    name: "component1",
    components:{
        Component2,

    }
}
</script>

<style>

</style>