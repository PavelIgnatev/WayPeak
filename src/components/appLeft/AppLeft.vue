<template >
  <div class="appLeft">
    <div class="appHeader" v-if="!this.$route.path.includes('/app/q')">
      <div class="appHeader__header">
        <div
          class="appHeader__header__icon"
          :style="`background: ${backgroundImg}`"
          @click="$store.commit('truemenuLeft')"
        >
          <p>{{ name ? name[0] : "" }}</p>
        </div>
        <div
          class="appHeader__header__nameandsername"
          @click="$store.commit('truemenuLeft')"
        >
          {{ name }} {{ sername }}
        </div>
        <div class="appHeader__header__search">
          <img
            src="@/assets/img/icons/search.svg"
            alt="search"
            class="invert_6"
            @click="$store.commit('trueinputActive')"
          />
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
    </div>
  </div>
</template>
<script>
import AppHeaderItem from "./AppHeaderItem";
import AppHeaderTabs from "./AppHeaderTabs";
export default {
  name: "AppLeft",
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
      ModalActive: false,
    };
  },
  components: {
    AppHeaderItem,
    AppHeaderTabs,
  },
};
</script>
<style lang="sass">
@import '@/assets/sass/_variables'
.appLeft
  display: none
.appHeader, .AppLeft
  color: $black
  width: 260px
  height: 100vh
  transition: 0.2s all
  box-sizing: border-box
  border-right: 1px solid rgba(0,0,0,.15)
  &__header
    padding: 0 15px
    height: 64px
    width: 230px
    display: flex
    align-items: center
    margin: 0 auto
    &__input
      left: 0
      width: 205px
      height: 30px
    &__search
      margin-left: 33px
    &__icon
      cursor: pointer
      display: block
      font-size: 15px
      line-height: 15px
      color: white
      width: 28px
      height: 28px
      border-radius: 50%
      margin-left: 6px
      p
        width: 100%
        height: 100%
        display: flex
        justify-content: center
        align-items: center
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
      width: 120px
      font-size: 14px
      margin-top: 3px
      margin-left: 12px
      color: $black

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