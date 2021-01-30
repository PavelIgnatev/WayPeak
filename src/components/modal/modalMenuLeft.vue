<template >
  <div
    class="setting"
  >
    <div class="setting__wrapper">
      <nav>
        <ul class="setting__menu" @click="$store.commit('falsemenuLeft')">
          <AppSetting
            v-for="item in this.$store.getters.returnSettingMenu"
            :key="item.text"
            :text="item.text"
            :to="item.to"
          ></AppSetting>
          <div class="line"></div>
          <AppSetting
            v-for="item in this.$store.getters.returnToSettingMenu"
            :key="item.text"
            :text="item.text"
            :to="item.to"
          ></AppSetting>
          <div class="line"></div>
          <li class="AppSetting">
            <router-link
              to="/"
              class="AppSetting_a"
              style="margin: 0; padding: 0"
              ><button @click.prevent:="quit" class="AppSetting_button">
                Выйти
              </button></router-link
            >
          </li>
          <div class="line" style="margin-bottom: 0px"></div>
        </ul>
      </nav>
    </div>
    <div class="setting__cover" @click="$store.commit('falsemenuLeft')"></div>
  </div>
</template>
<script>
import AppSetting from "../appLeft/AppSetting";
export default {
  name: "",
  components: { AppSetting },
  methods: {
    async quit() {
      await this.$store.dispatch("logout");
    },
  },
};
</script>
<style lang="sass">
.setting
    position: absolute
    top: 55px
    left: 25px
    background: white
    border: 1px solid rgba(0,0,0,.08)
    box-shadow: 0 2px 11px 0 rgba(0,0,0,.25)
    &__wrapper
        position: absolute
        width: 170px
        background: white
        border: 1px solid rgba(0,0,0,.08)
        box-shadow: 0 2px 11px 0 rgba(0,0,0,.25)
        z-index: 1000001
    &__menu
        z-index: 1000002
    &__cover
        position: absolute
        top: -60px
        left: -25px
        width: calc(100vw - 5px)
        height: calc(100vh)
        z-index: 1000000
</style>