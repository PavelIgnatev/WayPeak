<template >
  <div class="containerMain">
    <Preload></Preload>
    <AppLeft
      :class="{ AppLeftActive: $store.getters.returnHamburgerMenu }"
    ></AppLeft>
    <AppCenter></AppCenter>
    <AppRight v-show="$store.getters.returnmenuRight"></AppRight>
    <ModalMenuLeft
      v-show="
        $store.getters.returnmenuLeft &&
        $store.getters.returnHamburgerMenu == true
      "
    ></ModalMenuLeft>
    <ModalInputSearch
      v-if="
        $store.getters.returninputActive && $store.getters.returnHamburgerMenu
      "
    ></ModalInputSearch>
  </div>
</template>
<script>
import Preload from "../components/preload/preload";
import AppLeft from "../components/appLeft/AppLeft";
import AppCenter from "../components/appCenter/appCenter";
import AppRight from "../components/appRight/appRight";
import ModalMenuLeft from "../components/modal/modalMenuLeft";
import ModalInputSearch from "../components/modal/modalInputSearch";
export default {
  name: "app",
  components: {
    AppLeft,
    AppCenter,
    AppRight,
    Preload,
    ModalMenuLeft,
    ModalInputSearch,
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
  height: 100vh !important
  max-width: 100vw !important
  max-height: 100vh !important
  width: 100vw !important
  overflow: hidden !important
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