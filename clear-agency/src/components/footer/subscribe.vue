<template>
  <div id="subscribe" class="subscribe">
      <div class="header">
          <h4>NEWSLETTER</h4>
          <h1>Subscribe Company Newsletter</h1>
      </div>
      <div class="form-wrapper">
        <form @submit.prevent="">
            <input type="text" name="" placeholder="Your name">
            <input type="email" placeholder="Email" >
            <button>Submit</button>
        </form>    
      </div>
  </div>
</template>

<script>
export default {
    name: "subscribe"
}
</script>

<style scoped>
.subscribe{
    width: 100%;
    height: 617px;
    background-color: #302A5D;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 155px 527px 155px;
}
.header{
    color: #fff;
    text-align: center;
    
}

.header h1{
    font-size: 40px;
    display: inline;
    padding-bottom: 140px;
}

.header h4{
    font-size: 25px;
    font-weight: 400;
}

.form-wrapper{
    padding-top: 140px;
    position: relative;
    color: #fff;
}

form{
    display: grid;
    grid-auto-flow: column;
    
}


form input{
    border: none;
    background-color: transparent;
    width: 430px;
    height: 50px;
    border-bottom: 2px solid #fff;
    margin-right: 80px;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 24px;
}

form input::placeholder{
    font-size: 20px;
}
button{
    position: relative;
    top: -10px;
    padding: 15px 55px;
    background-color: rgba(0, 0, 0, 0);
    border: 3px solid #886EF1;
    border-radius: 60px;
    font-size: 21px;
    color: #fff;
    cursor: pointer;
}
</style>