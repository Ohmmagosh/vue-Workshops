<template>
  <div class="service">
      <div class="container">
          <div class="text-wrap">
              <div class="header">
                  <h4>WE HELP WITH</h4>
                  <h1>Building </h1>
                  <h1>Better</h1>
                  <h1>Solutions</h1>
              </div>
              <div class="button">
                  <a href="#">Our service</a>
                  <span><i><box-icon name='right-arrow-alt' color='#fff9f9' size="sm"></box-icon></i></span>
              </div>
          </div>
          <div class="card-wrap">
              <Card v-for="(item, index) in service" 
              :key="index"
              :title="item.title"
              :detail="item.Detail"
              />
          </div>
      </div>
  </div>
</template>

<script>
import Card from './card.vue'
export default {
    name: "service",
    components:{
        Card  
    },
    props:["service"]
}
</script>

<style scoped>
.service{
    position: relative;
    width: 100%;
    height: 818px;
    background-color: #302A5D;
    display: flex ;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
}

a{
    color: #fff;
    text-decoration: none;
    font-size: 15px;
    padding: 0 28px;    
}

.button{
    width: 240px;
    height: 58px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 4px solid #6148C6;
    border-radius: 25px;
    margin-top: 47px;
    cursor: pointer;
}

.button i {
    position: relative;
    top: 4px;
    left: 4px;
}

.container{
    width: 1250px;
    height: 523px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    align-items: center;
}

.card-wrap{
    width: 800px;
    height: 520px;
    display: grid;
    grid-template-columns: 1fr 1fr;
}

.text-wrap{
    height: 100%;
    width: 440px;
}

.text-wrap h4{
    font-size: 18px;
    font-weight: 300;
    margin-bottom: 20px;
}

.text-wrap h1{
    font-size: 43px;
}


</style>