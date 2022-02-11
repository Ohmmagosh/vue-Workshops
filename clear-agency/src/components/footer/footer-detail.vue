<template>
  <div id="footer-detail" class="footer">
      <div class="container">
          <div class="row">
              <div class="footer-col">
                  <div class="footer-logo">
                      <box-icon name='cube' class="logo"></box-icon>
                      <h4>ClearAgency</h4>
                  </div>
                  <div class="text-box">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem?</p>
                  </div>
              </div>
              <div class="footer-col">
                  <h4>Service</h4>
                  <div class="text-box">
                    <ul>
                        <li><a href="#">Development</a></li>
                        <li><a href="#">Dedign Spint</a></li>
                        <li><a href="#">UX Design</a></li>
                        <li><a href="#">Online Marketing</a></li>
                        <li><a href="#">Content</a></li>
                    </ul>
                  </div>
              </div>
              <div class="footer-col">
                  <h4>About us</h4>
                  <div class="text-box">
                    <ul>
                        <li><a href="#">About us</a></li>
                        <li><a href="#">Portfolio</a></li>
                        <li><a href="#">Team</a></li>
                        <li><a href="#">New &amp; Article</a></li>
                        <li><a href="#">Career</a></li>
                    </ul>
                  </div>
              </div>
              <div class="footer-col">
                  <h4>Get in touch</h4>
                  <div class="text-box">
                      <p>99 Wall Street</p>
                      <p>New York, NY 10005</p>
                  </div>
                  <div class="social-link">
                      <a href="#"><box-icon name='facebook' type='logo' ></box-icon></a>
                      <a href="#"><box-icon name='skype' type='logo' ></box-icon></a>
                      <a href="#"><box-icon name='linkedin' type='logo' ></box-icon></a>
                      <a href="#"><box-icon name='instagram' type='logo' ></box-icon></a>        
                  </div>
              </div>
          </div>
      </div>
          <div class="copyright">
              <box-icon name='copyright' ></box-icon>
              <p>2020 SprintCube</p>
          </div>
  </div>
</template>

<script>

export default {
    name: "footer-detail",
}
</script>

<style scoped>
.footer{
    position: relative;
    bottom: 0;
    height: 533px;
    width: 100%;
    background-color: #ffffff;
}

.footer-logo{
    display: flex;
    font-size: 23px;
}

.footer-logo .logo{
    width: 30px;
    height: 30px;
}

.footer-col{
    width: 403px;
    display: flex;
    flex-direction: column;
}

.footer-col h4{
    font-size: 23px;
}

.footer-col li{
    list-style: none;
    
}

.footer .text-box{
   padding-top: 32px;
   line-height: 200%;
   
}

.footer-col a{
    text-decoration: none;
    color: black;
}

.row{
    position: relative;
    display: grid;
    grid-auto-flow: column;
    justify-items: center;
    padding-top: 84px;
    padding-bottom: 120px;
    padding-left: 333px;
    justify-content: center;
}
.social-link{
    margin-top: 37px;
}
.social-link a{
    padding-right: 37px ;
}

.copyright{
    display: flex;
    justify-content: center;
}


</style>