<template >
  <div class="containerMain">
    <Preload></Preload>
    <AppLeft :class="{hide: !$store.getters.returnHamburgerMenu}"></AppLeft>
    <AppCenter></AppCenter>
    <AppRight></AppRight>
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
};
</script>
<style lang="sass">
@import '@/assets/sass/_variables'
.containerMain
  height: 100vh
  width: 100vw
  user-select: none
  display: flex
.appLeft, .appHeader
  transition: 0.3s ease-in-out !important
.appCenter  
  flex-grow: 1
  z-index: 1000
.appRight
  width: 36% 
  min-width: 312px
  z-index: 100
.hide
  transition: 0.2s ease-in-out !important
  opacity: 0
  .appHeader 
    opacity: 0
    width: 0px
</style>