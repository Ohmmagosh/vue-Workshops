<template>
  <div id="footer" class="footer">
      <Subscribe />
      <FooterDetail />
  </div>
</template>

<script>




export default {
    name: "footers",
    components:{
        'Subscribe':require('./subscribe.vue').default,
        'FooterDetail':require('./footer-detail.vue').default
    }
}
</script>

<style scoped>

</style>