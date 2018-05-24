<template>
  <div id="app">
    <Nav ></Nav> 
   <!--  <v-nav res="nav"></v-nav>   -->
  </div>
</template>

<script>
import Nav from "./components/nav/Nav";
/*import vNav from "./components/nav/vNav";*/
export default {
  name: 'App',
components: {
   Nav,
 /* vNav,*/
 
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
