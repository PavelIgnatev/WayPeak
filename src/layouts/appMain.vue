<template >
  <div class="appMain">
    <div class="load" v-if="loading">
      <Plane
        style="
          position: absolute;
          left: 50%;
          top: 45%;
          transform: translate(-50%, -50%);
        "
      ></Plane>
    </div>
    <AppHeader></AppHeader>
    <router-view style="width: calc(100vw - 260px);box-sizing: border-box"></router-view>
  </div>
</template>
<script>
import { Plane } from "vue-loading-spinner";
import AppHeader from "../components/appheader/AppHeader";
export default {
  name: "app",

  data() {
    return {
      loading: true,
    };
  },

  mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 1500);
  },

  
  components: {
    Plane,
    AppHeader
  },
};
</script>
<style lang="sass">
.load
  margin: 0
  padding: 0
  position: absolute
  top: 0
  left: 0
  width: 100%
  height: 100vh
  background: white
  z-index: 100000
.appMain
  overflow: hidden
  user-select: none
  display: flex
</style>