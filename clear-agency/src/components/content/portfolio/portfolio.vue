<template>
  <div class="portfolio">
      <div class="text-box">
        <h4>PORTFOLIO</h4>
        <h1>Projects we love</h1>
      </div>
      <div class="card">
        <Portfolio-card v-for="(item, index) in portfolio" 
        :key="index"
        :photo="item.photo"
        />
      </div>
  </div>
</template>

<script>
export default {
    name: "portfolio",
    props:["portfolio"],
    components:{
      'Portfolio-card':require('./portfolio-card.vue').default
    }
}
</script>

<style scoped>
.portfolio{
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 1053px;
  background-color: #fff;
}

.card{
  display: flex;
}

.text-box{
  margin-left: 340px;
}

.text-box h1{
  font-size: 45px;
}

.text-box h4{
  font-size: 18px;
  font-weight: 300;
}

</style>