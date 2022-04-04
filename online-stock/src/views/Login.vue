<template>
  <v-container>
    <v-row class="justify-center">
      <v-card style="width: 400px">
        <v-img src="../assets/login_header.jpg" height="200px" />
        <v-card-text>
          <v-form>
            <!-- username -->
            <v-text-field name="username" label="Username" id="username" />
            <!-- password -->
            <v-text-field name="password" label="Password" id="password" />
            <v-row class="justify-space-between px-3">
              <v-btn text >Register</v-btn>
    
              <v-btn color="success">Login</v-btn>
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
};
</script>

<style></style>
