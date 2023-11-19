<template>
  <img class="logo" src="../assets/logo.png" />
  <h3>Login</h3>
  <div class="register">
    <input type="text" placeholder="Enter Name ..." />
    <input type="password" placeholder="Enter PassWord ..." />
    <button v-on:click="login">Login</button>
    <p>
      <router-link to="/sign-up">SignIn</router-link>
    </p>
  </div>
  
</template>
<script>
export default {
  props: {},
  name: "PageLogin",
  data() {
    return {
      name: "",
      password: "",
    };
  },
  methods: {
    login() {
      this.$router.push({name:'PageHome'})
    },
  },
};
</script>
<style>
.logo {
  width: 100px;
}
.register input {
  width: 300px;
  height: 40px;
  padding-left: 20px;
  display: block;
  margin-bottom: 30px;
  margin-left: auto;
  margin-right: auto;
}

.register button {
  width: 320px;
  height: 40px;
  color: #fff;
  background-color: skyblue;
  cursor: pointer;
}
</style>
