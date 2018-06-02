<template>
  <div id="app">
   <!--  <Nav ></Nav> --> 
   <div class="body">
     <router-view></router-view>
   </div>
   <div class="foot">
        <router-link to='/Initial'>首页</router-link>
        <router-link to='/kind'>分类</router-link>
       <router-link to='/find'>发现</router-link>
       <router-link to='/me'>我</router-link>
   </div>
  </div>
</template>
<script>
//import Nav from "./components/nav/Nav";
export default {
  name: 'App',
components: {
  // Nav
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

}
div.body{
  width: 100%;
  height: 100%;
  overflow: scroll;
}
div.foot{
  width: 100%;
  height: 84px;
  position: absolute;
  bottom: 0;
  left: 0;
 display: flex;
 text-align: center;
 justify-content:space-around; 
}
</style>
