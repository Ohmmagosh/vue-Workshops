<template>
  <div id="Navbar" class="navbar">
      <div class="nav-logo">
          <box-icon name='cube' class="logo"></box-icon>
          <h2>ClearAgency</h2>
      </div>
      <div class="nav-menu">
        <ul class="nav-list">
          <li><a href="#">Home</a></li>
          <li><a href="#">About us</a></li>
          <li><a href="#">Service</a></li>
          <li><a href="#">Our Work</a></li>
          <li><a href="#"><button>Contack us</button></a></li>
        </ul>
      </div>
  </div>
</template>

<script>

export default {
    name: "Navbar",
}
</script>

<style scoped>

.navbar{
  position: sticky;
  top: 0;
  background-color: rgba(255, 255, 255, 0.9);
  width: 100%;
  height: 128px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  z-index: 100;
  border: 1px solid rgba(119, 116, 116, 0.5);
}

.nav-logo{
  display: flex;
  flex-direction: row;
  padding: 48px 58px;
}

.nav-logo .logo{
  width: 40px;
  height: 35px;
}

.nav-logo h2{
  font-size: 21px;
}

.nav-list{
  display: flex;
  flex-direction: row;
  list-style: none;
  margin-right: 50px;
}

.nav-list li{
  display: flex;
  padding: 50px;
  justify-content: center;
  align-items: center;
}

.nav-list a{
  text-decoration: none;
  font-size: 18px;
  font-weight: 400;
  color: black;
}

.nav-list a:hover,
.nav-list button:hover{
  color: #886EF1;

}

.nav-list button{
  border: 4px solid #886EF1;
  border-radius: 50px;
  background: rgba(0, 0, 0, 0);
  padding: 21px 33px;
  cursor: pointer;
  font-size: 18px;
  font-weight: 400;
}
</style>