<template >
  <header class="appHeader" v-if="!this.$route.path.includes('/app/q') && $store.getters.returnHamburgerMenu" >
    <div class="appHeader__header">
      <div
        class="appHeader__header__icon"
        :style="`background: ${backgroundImg}`"
        @click="ModalActive = true"
      >
        <p>{{ name ? name.split("")[0] : "" }}</p>
      </div>
      <div
        class="appHeader__header__nameandsername"
        @click="ModalActive = true"
      >
        {{ name }} {{ sername }}  
      </div>
      <div class="appHeader__header__search">
        <img
          src="@/assets/img/icons/search.svg"
          alt="search"
          class="invert_6"
          @click="InputActive = true"
        />
        <div class="appHeader__input" v-if="InputActive">
          <input
            type="text"
            placeholder="Поиск"
            class="appHeader__input_search"
            v-model="search"
          />
          <div
            class="appHeader__input__rgba"
            @click="InputActive = false"
          ></div>
          <div class="appHeader__input_times" @click="search = ''">&times;</div>
        </div>
      </div>
      <div class="appHeader__header__bell">
        <img src="@/assets/img/icons/bell.svg" alt="bell" class="invert_6" />
      </div>
    </div>
    <div class="appHeader__wrapper">
      <div class="appHeaderItem">
        <AppHeaderItem
          v-for="item in this.$store.getters.returnHeaderItem"
          :key="item.title"
          :title="item.title"
          :active="item.active"
          :src="item.src"
          :classImg="item.classImg"
          :to="item.to"
        ></AppHeaderItem>
        <AppHeaderTabs></AppHeaderTabs>
        <div class="line"></div>
        <AppHeaderItem
          v-for="item in this.$store.getters.returnToHeaderItem"
          :key="item.title"
          :title="item.title"
          :src="item.src"
          :classImg="item.classImg"
          :to="item.to"
        ></AppHeaderItem>
      </div>
    </div>
    <div class="appHeader__setting" v-if="ModalActive">
      <div class="appHeader__setting__wrapper" @click="ModalActive = true">
        <nav>
          <ul class="appHeader__setting__menu">
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
      <div class="appHeader__setting__rgba" @click="ModalActive = false"></div>
    </div>
  </header>
</template>
<script>
import AppHeaderItem from "./AppHeaderItem";
import AppHeaderTabs from "./AppHeaderTabs";
import AppSetting from "./AppSetting";
export default {
  name: "AppHeader",
  async mounted() {
    if (!Object.keys(this.$store.getters.info).length) {
      await this.$store.dispatch("fetchInfo");
    }
  },
  computed: {
    name() {
      return this.$store.getters.info.name;
    },
    sername() {
      return this.$store.getters.info.sername;
    },
    backgroundImg() {
      return this.$store.getters.info.backgroundImg;
    },
  },
  data() {
    return {
      inputActive: false,
      ModalActive: false,
      InputActive: false,
      search: "",
    };
  },
  components: {
    AppHeaderItem,
    AppHeaderTabs,
    AppSetting,
  },
  methods: {
    async quit() {
      await this.$store.dispatch("logout");
    },
  },
};
</script>
<style lang="sass">
@import '@/assets/sass/_variables'
.appHeader
  color: $black
  width: 260px
  height: 100vh
  transition: 0.2s all
  box-sizing: border-box
  border-right: 1px solid rgba(0,0,0,.15)
  &__input
    position: absolute
    width: 260px
    height: 64px
    background: white
    top: 0
    left: 0
    display: flex
    justify-content: center
    align-items: center
    z-index: 100
    &_times
      font-size: 22px
      color: #909090
      position: absolute
      right: 25px
      cursor: pointer
      z-index: 1000002
    &_search
      box-sizing: border-box
      color: rgba(0,0,0,.85)
      width: 220px
      height: 36px
      font-size: 16px
      z-index: 1000001
      padding-right: 20px
      &::placeholder
        color: #909090
        font-size: 14px
    &__rgba
      background: rgba(0,0,0,0)
      position: absolute
      top: 0
      left: 0
      z-index: -1
      width: 100vw
      height: 100vh
  &__setting
    width: 100vw
    top: 0
    left: 0
    height: 100vh
    z-index: 1000
    background: rgba(0,0,0,0)
    position: absolute
    &__wrapper
      padding: 5px 0
      width: 185px
      min-height: 200px
      background: white
      z-index: 1001
      margin-left: 20px
      margin-top: 50px
      box-shadow: 0 2px 11px 0 rgba(0,0,0,.3)
      border-radius: 4px
    &__rgba
      background: rgba(0,0,0,0)
      position: absolute
      top: 0
      left: 0
      z-index: -1
      width: 100vw
      height: 100vh
  &__header
    padding: 0 15px
    height: 64px
    width: 230px
    display: flex
    align-items: center
    margin: 0 auto
    &__input
      position: absolute
      left: 0
      width: 205px
      height: 30px
    &__search
      margin-right: 15px
    &__icon
      cursor: pointer
      display: block
      font-size: 15px
      line-height: 15px
      color: white
      width: 28px
      height: 28px
      display: flex
      justify-content: center
      align-items: center
      border-radius: 50%
      margin-left: 3px
    img
      display: block
      width: 17px
      cursor: pointer
      &:hover
        filter: invert(0.4)
    &__nameandsername
      cursor: pointer
      margin-left: 8px
      white-space: nowrap
      overflow: hidden
      text-overflow: ellipsis
      width: 105px
      font-size: 14px
      margin-top: 3px
      color: $black
      margin-right: 30px
  &__wrapper
    display: flex
    justify-content: center
    overflow: auto
    width: 100%
    height: calc(100vh - 64px)
  .activeItem
    background-color: rgba(75,111,222,.2)
    font-weight: 700
    font-size: 13.5px
    span
      color: black
  .line
    margin: 5px 0
    border-bottom: 1px solid rgba(0,0,0,.1)
</style>