<template>
  <div id="app">
    <nav-bar></nav-bar>
    <!-- <play-bar></play-bar> -->
    <router-view />
  </div>
</template>

<script>
import NavBar from "./components/NavBar";
// import PlayBar from "./components/PlayBar.vue";

export default {
  components: {
    NavBar,
    // PlayBar,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
