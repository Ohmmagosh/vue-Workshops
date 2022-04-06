<template>
  <v-container>
    <v-row justify="center" class="pa-10">
      <v-card style="width: 350px" class="">
        <v-img
          class="white--text align-end"
          src="../assets/login_header.jpg"
          height="200px"
        >
          <v-card-title primary-title> Register </v-card-title>
        </v-img>
        <v-card-text>
          <v-form @submit.prevent="submit">
            <!-- username -->
            <v-text-field 
            name="username" 
            label="Username" 
            id="username"
            v-model="account.username"
            :rules="usernameRules" 
            />
            <!-- password -->
            <v-text-field
              name="password"
              label="Password"
              id="password"
              :append-icon="isShowPassword ? 'visibility' : 'visibility_off'"
              counter
              :type="isShowPassword ? 'text' : 'password'"
              v-model="account.password"
              @click:append="isShowPassword = !isShowPassword"
              :rules="passwordRules"
            />
            <span>{{account}}</span>
            <v-row class="justify-space-between pa-3 pt-5">
              <v-btn text @click.prevent="$router.back()">cancel</v-btn>
              <v-btn type="submit">confirm</v-btn>
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
      alert(JSON.stringify(this.account))
    }
  },
  data() {
    return {
      isShowPassword: false,
      account: {
        username: "",
        password: "",
      },
      usernameRules:[v1=>!!v1 || "Username is required",],
      passwordRules:
      [v1=>!!v1 || "Password is required", 
      v2=>!!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(v2) || "Minimum eight characters, at least one letter and one number"]
    };
  },
};
</script>

<style></style>
