<template >
  <div class="containerMain">
    <Preload></Preload>
    <AppLeft :class="{AppLeftActive: $store.getters.returnHamburgerMenu}"></AppLeft>
    <AppCenter></AppCenter>
    <AppRight v-show="$store.getters.returnmenuRight"></AppRight>
  </div>
</template>
<script>
import Preload from '../components/preload/preload'
import AppLeft from "../components/appLeft/AppLeft";
import AppCenter from "../components/appCenter/appCenter";
import AppRight from "../components/appRight/appRight";
export default {
  name: "app",
  components: {
    AppLeft,
    AppCenter,
    AppRight,
    Preload,

  },
  async mounted() {
    if (!Object.keys(this.$store.getters.returnInboxPost).length) {
      await this.$store.dispatch("fetchMess");
    }
  },
};
</script>
<style lang="sass">
@import '@/assets/sass/_variables'
.containerMain
  height: 100vh
  width: 100vw
  user-select: none
  display: flex
.appCenter  
  flex-grow: 1
  z-index: 1000
.appRight
  width: 25%
  min-width: 312px
  z-index: 100
.AppLeftActive
  left: 0
  display: block  
</style>