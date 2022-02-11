<template>
  <div class="news">
      <div class="container">
            <div class="header">
                <h1>Read what our team has published the internet</h1>
            </div>
            <div class="photo">
                <News-card v-for="(item, index) in newscard" 
                :key="index"
                :title="item.title"
                :src="item.src"
                :date="item.date"
                :writer="item.writer" 
                />    
            </div>
        </div>
  </div>
</template>

<script>
export default {
    name: "news",
    props:['newscard'],
    components:{
        'News-card':require('./news-card.vue').default
    }
}
</script>

<style scoped>
.news{
    position: relative;
    width: 100%;
    height: 834px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.container{
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.header{
    width: 690px;
    height: 124px;
}

.header h1{
    font-size: 38px;
    text-align: center;
}

.photo{
    margin-top: 170px;
    display: flex;
    flex-direction: row;
    width: 100%;
}


</style>