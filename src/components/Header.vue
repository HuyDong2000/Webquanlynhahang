<template>
<div class="nav">
    <a href="#">Home</a>
    <a href="#">Add Restaurant</a>
    <a href="#">Update Restaurant</a>
    <a href="#">LogOut</a>
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