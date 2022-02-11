<template>
      <div class="home">
          <div class="content-wrapper">
              <h4>OUR GOAL</h4>
              <h1>Better products for your users</h1>
              <p>we help our clients realize their most important bussiness golas.</p>
              <div class="btn-wrapper">
                  <button><a>GET IN TOUCH</a></button>
                  <a href="#">WATCH VIDEO<span><i><box-icon name='play' color='#ffffff'  size="md"></box-icon></i></span></a>
              </div>
          </div>
          <div class="image">
              <img src="https://images.unsplash.com/photo-1539343915366-4da26f7a1f2c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80" alt="">
          </div>
      </div>
</template>

<script>
export default {
    name: "home",
}
</script>

<style scoped>
.home{
    width: 100%;
    height: 100vh;
}
img{
    position: absolute;
    width: 42%;
    height: 100vh;
    right: 0;
    
}

.content-wrapper{
    position: absolute;
    top: 30%;
    left: 15%;
    width: 750px;
    height: 450px;
    cursor: pointer;
}

.content-wrapper h1{
    font-size: 57px;
}

.content-wrapper h4 ,
.content-wrapper p{
    font-size: 24px;
    padding: 60px 0;
}



.btn-wrapper a{
    border: none;
    border-radius: 25px;
    font-size: 24px;
    text-decoration: none;
    color: black;
    cursor: pointer;
}

.btn-wrapper button{
    margin-right: 80px;
    border: none;
    border-radius: 50px;
    padding: 25px 50px;
    background: linear-gradient(to right, #D584DF 50%, #866CD9);
    cursor: pointer;
}

.btn-wrapper span{ 
    background: linear-gradient(to right, #D584DF 50%, #866CD9);
    margin-left: 10px; 
    border-radius: 50px;
    width: 50px;
    height: 50px;
}

.btn-wrapper i{
    position: relative;
    top: 9px;
    left: 3px;
}


</style>