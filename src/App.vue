<template>
  <div id="app">
    <top-nav></top-nav>
    <body-show>
      <router-view></router-view>
    </body-show>
    <foot></foot>
  </div>
</template>

<script>
import TopNav from "./components/framework/top/TopNav";
import Foot from "./components/framework/foot/Foot";
import BodyShow from './components/framework/body/BodyShow.vue';

export default {
  name: "App",
  components: {
    TopNav,
    Foot,
    BodyShow,
  },

  TopNav,
};
</script>

<style>
@import url("./assets/css/base.css");
#app {
  background-color: #f7f7f7;
}
</style>
