<template>
  <div class="form">
      <div class="container">
          <div class="flex-box">
              <div class="text-box">
                <h4>GET IN TOUCH</h4>
                <h1>Let's start with your dream project</h1>
                <p>We help our clients make realize their most</p>
                <p>+1 123 456 7890</p>
              </div>
          </div>
          <div class="form-wrap">
              <form action="">
                  <input type="email" placeholder="Email">
                  <input type="text" placeholder="Full name">
                  <input type="text" placeholder="Message">
                  <button>SUBMIT</button>
              </form>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name: "form",
}
</script>

<style scoped>
.form{
    width: 100%;
    height: 834px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.container{
    width: 1250px;
    height: 520px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.text-box{
    position: relative;
    width: 460px;
}

.text-box h4{
    font-size: 16px;
    font-weight: 300;
}

.text-box h1{
    font-size: 40px;
}

.text-box p{
    font-size: 18px;
    font-weight: 400;
    margin-top: 20px;
}

.text-box p:nth-last-child(1){
    font-weight: 800;
}

.form-wrap{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 640px;
    height: 100%;

}

.form-wrap form{
    display: flex;
    flex-direction: column;
}

input{
    width: 630px;
    margin-bottom: 70px;
    height: 50px;
    border: none;
    border-bottom: 2px solid #D4D4D4;
}

form button{
    font-weight: 500;
    border-radius: 25px;
    width: 158px;
    height: 55px;
    border: 2px solid #866CD9;
    background: none;
    cursor: pointer;
}



</style>