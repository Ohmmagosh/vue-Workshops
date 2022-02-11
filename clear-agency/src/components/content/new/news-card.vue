<template>
  <div class="news-card">
      <div class="container">
          <div class="photo">
            <img :src="src" alt="">
          </div>
          <div class="content">
              <div class="title">
                  <h1>
                    {{ title }}
                  </h1>
                  <div class="credits">
                    <p>{{ date }}</p>&nbsp;&nbsp;<p>by {{ writer }}</p>                      
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name: "news-card",
    props:['title','src','date','writer']
}
</script>

<style scoped>
img{
    width: 100%;
    height: 287px;
    border-radius: 20px 20px 0 0;
}

.container{
    width: 375px;
    height: 425px;
    cursor: pointer;
    margin: 0 30px 0 0;
    border-radius: 20px 20px 20px 20px;
    box-shadow: -1px 0px 8px 9px rgba(0, 0, 0, 0.1);
}

.photo{
    width: 100%;
    margin: 0 30px 0 0;
}

.title h1{
    font-size: 22px;
    font-weight: 700;
    padding: 18px;
}
.credits{
    display: flex;
    font-size: 15px;
    padding: 0 0 0 18px;
}

.credits p:nth-last-child(1){
    color: blue;
}



</style>