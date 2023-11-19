<template>
  <img class="logo" src="../assets/logo.png" />
  <h3>SignUp</h3>
  <div class="register">
    <input type="text" placeholder="Enter Name ..." />
    <input type="text" placeholder="Enter Email ..." />
    <input type="password" placeholder="Enter PassWord ..." />
    <button v-on:click='signup'>SinUp</button>
  </div>
</template>
<script>
export default {
  props: {
  },
  name: "SignUp",
  data(){
      return{
          name:'',
          email:'',
          password:''
      }
  },
  methods:{
      signup(){
          console.warn('SignUp');
      }
  }
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
