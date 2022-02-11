<template>
  <div class="know">
      <div class="content-wrap">
        <div class="content-1">
          <div class="image">
            <img src="https://images.unsplash.com/photo-1574852859542-1b41217a7815?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="">
          </div>
          <div class="flexbox">
              <div class="box">
                <h1>Design solutions</h1>
                <h1>to improve product</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit vel odio voluptate consequuntur, doloribus provident dolorem corporis quos modi harum? Accusamus numquam vel sapiente dolor voluptas ipsum suscipit fugiat non, ea laudantium libero aperiam officiis nulla repudiandae corporis illum. Voluptas?</p>
              </div>
              <div class="button">
                <a href="#">KNOW MORE</a>
                <span><i><box-icon name='right-arrow-alt' color='#fff9f9' size="sm"></box-icon></i></span>
              </div>
          </div>
        </div>
        <div class="content-2">
          <div class="image">
            <img  class="right-img" src="https://images.unsplash.com/photo-1643908091873-a64caefd35fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=932&q=80" alt="">
          </div>
          <div class="flexbox">
              <div class="box second">
                <h1>Develop powerful</h1>
                <h1>apps for your bussiness</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit vel odio voluptate consequuntur, doloribus provident dolorem corporis quos modi harum? Accusamus numquam vel sapiente dolor voluptas ipsum suscipit fugiat non, ea laudantium libero aperiam officiis nulla repudiandae corporis illum. Voluptas?</p>
              </div>
              <div class="button left-btn">
                <a href="#" class="left-a">KNOW MORE</a>
                <span><i><box-icon name='right-arrow-alt' color='black' size="sm"></box-icon></i></span>
              </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
    name: "know"
}
</script>

<style scoped>
.know{
  position: relative;
  width: 100%;
  height: 2261px;
}


img{
  position: relative;
  height: 100%;
  width: 850px;
  border-radius: 0px 19px 19px 0px;
  box-shadow: 4px 0px 14px 11px rgba(0, 0, 0, 0.1);
}

.right-img{
  border-radius: 19px 0px 0px 19px;
  box-shadow: -9px 4px 10px 10px rgba(0, 0, 0, 0.1);
}

.content-1{
  position: relative;
  height: 776px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  margin-top: 200px;
}

.content-2{
  position: relative;
  display: flex;
  flex-direction: row-reverse;
  flex-wrap: nowrap;
  margin-top: 300px;
}

.content-1 .image{
  height: 100%;
}

.button{
    width: 240px;
    height: 58px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 25px;
    margin-top: 47px;
    background: linear-gradient(to right, #D584DF 50%, #866CD9);
    cursor: pointer;
}

.button i {
    position: relative;
    top: 4px;
    left: 4px;
    cursor: pointer;
}

a{
    color: #fff;
    text-decoration: none;
    font-size: 15px;
    padding: 0 28px;    
}
.left-a{
    color: black;
    text-decoration: none;
    font-size: 15px;
    padding: 0 28px;    
}

.flexbox{
  display: flex;
  width: 720px;
  flex-direction: column;
  justify-content: center;
}

.box h1{
  font-size: 48px;
}

.box p{
  margin-top: 40px;
  font-size: 21px;
  color: #B1B3B3;
}

.second{
  margin-right: 120px;
}

.left-btn{
  width: 240px;
  height: 58px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
  margin-top: 47px;
  background: none;
  border: 4px solid #D584DF;
  cursor: pointer;
}

</style>