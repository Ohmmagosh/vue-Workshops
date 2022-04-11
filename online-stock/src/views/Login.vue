<template>
  <v-container>
    <v-row  justify="center" class="pa-10">
      <v-card style="width:350px" class="">
        <v-img class="white--text align-end" src="../assets/login_header.jpg" height="200px" >
          <v-card-title primary-title>
            Login
          </v-card-title>
        </v-img>
        <v-card-text>
          <v-form @submit.prevent="submit">
            <!-- username -->
            <v-text-field 
            name="username" 
            label="Username" 
            id="username" 
            v-model="account.username"/>
            <!-- password -->
            <v-text-field 
            name="password" 
            label="Password" 
            id="password" 
            :append-icon="isShowPassword ? 'visibility': 'visibility_off'" 
            counter 
            :type="isShowPassword ? 'text' : 'password' "
            v-model="account.password"
            @click:append="isShowPassword = !isShowPassword"/>
            <v-row class="justify-space-between pa-3 pt-5">
              <v-btn text @click.prevent="$router.push('/Register')" >Register</v-btn>
              <v-btn type="submit">Login</v-btn>
            </v-row>
          </v-form>
        </v-card-text>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "login",
  methods: {
    submit(){
      this.$router.push('/stock')
      this.$store.dispatch({ 
        type: "doLogin",
        username : this.account.username, 
        password : this.account.password
        })
    }
  },
  data() {
    return {
      isShowPassword:false,
      account:{
        usename:"",
        password:""
      }
    }
  },
};
</script>

<style></style>
