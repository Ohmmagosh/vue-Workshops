<template>
  <div class="portfolio-card">
      <div class="container"></div>
      <img :src="photo" >
  </div>
</template>

<script>
export default {
    name: "portfolio-card",
    props:['photo']
}
</script>

<style scoped>
.container{
    display: flex;
    flex-direction: row;
}

img{
    position: relative;
    width: 428px;
    height: 516px;
    margin:  64px  32px 250px 32px;
    border-radius: 25px;
    background: rgb(170, 211, 170);
}
</style>