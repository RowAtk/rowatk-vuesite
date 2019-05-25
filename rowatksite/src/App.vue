<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <Sidebar></Sidebar>
    <router-view id="content"></router-view>
  </div>
</template>

<script>
import Sidebar from "./components/Sidebar"
export default {
  components: {
    Sidebar
  }
}
</script>


<style>
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  } 

  body{
    font-family: Arial, Helvetica, sans-serif;
    display: inline-block;
  }

  #app{
    display: 'inline-block';
  }

  #content{
    margin-left: 250px;
    padding: 20px;
  }
</style>
