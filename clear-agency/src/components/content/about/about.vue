<template>
  <div class="about">
      <div class="container">
        <div class="header">
            <h1>what do our clients say about us?</h1>
        </div>
        <div class="text-box">
            <div class="photo">
                <img src="https://images.unsplash.com/photo-1485893086445-ed75865251e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="">
            </div>
            <div class="text">
                <p>We help client make realize their most important bussiness goals. We help client make realize their most important bussiness goals. We help client make realize their most important bussiness goals.</p>
                <h4>JOHN DOE</h4>
                <h4>CEO, Boogle Inc.</h4>
            </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
    name: "about"
}
</script>

<style scoped>
.about{
    position: relative;
    width: 100vw;
    height: 1000px;
    background: #302A5D;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: #fff;
}


img{
    width: 200px;
    height: 200px;
    border-radius: 50%;
}

.container{
    width: 650px;
}

.header{
    font-size: 30px;
}

.text-box h4{
    font-size: 21px;
    font-weight: 400;
}

.text-box p{
    margin: 12px 0 60px 0;
}

.text-box h4:nth-last-child(1){
    font-size: 15px;
    font-weight: 300;
}
</style>