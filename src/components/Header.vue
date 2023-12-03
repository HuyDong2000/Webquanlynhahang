<template>
<div class="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/add">Add Restaurant</router-link>
    <router-link to="/update">Update Restaurant</router-link>
    <a v-on:click="logout" href="#">LogOut</a>
</div>
</template>

<script>
export default {
    name:'PageHeader',
}
</script>

<style>
body{
    margin: 0px;
    padding: 0px;
}
.nav{
    background-color: #333;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;

}
.nav a{
    float: left;
    color: #f2f2f2;
    text-align: center;
    padding: 16px 14px;
    text-decoration: none;
    font-size: 16px;
    margin-right: 4px;

}
.nav a:hover{
    background-color: #fff;
    color: #222;
}
</style>