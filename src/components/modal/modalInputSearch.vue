<template >
  <div class="appHeader__input">
    <input
      type="text"
      placeholder="Поиск"
      class="appHeader__input_search"
      v-model="search"
    />
    <div class="appHeader__input_wrapper" v-if="search" @click="close">
      <img
        src="@/assets/img/icons/search.svg"
        class="invert_6 appHeader__input_img"
      />
      <router-link class="appHeader__input_data" :to="`/app/search/${search}`"
        ><p>Поиск "{{ search }}"</p></router-link
      >
    </div>

    <div class="appHeader__input_times" @click="search = ''">&times;</div>
    <div
      class="appHeader__input__rgba"
      @click="$store.commit('falseinputActive')"
    ></div>
  </div>
</template>
<script>
export default {
  name: "modalInputSearch",
  data() {
    return { search: "",width: screen.width  };
  },
  created() {
    window.addEventListener("resize", this.updateWidth);
  },
  methods: {
    close(){
      this.search = ''
      this.$store.commit("falseinputActive")
      if(this.width <= 1090){
        this.$store.commit('falsehamburger')
      }
    },
    updateWidth() {
      this.width = window.innerWidth;
    }
  },
};
</script>
<style lang="sass">
.appHeader
  &__input
    position: absolute
    min-width: 260px
    max-width: 260px
    height: 64px
    background: white
    display: flex
    justify-content: center
    align-items: center
    z-index: 1000020
    &_img
      position: absolute
      top: 0
      display: block
      width: 15px
      top: 48%
      transform: translateY(-50%)
      left: 12px
    &_wrapper
      position: absolute
      top: 53px
      left: 50%
      transform: translateX(-50%)
      width: 230px
      height: 46px
      z-index: 100001
      background: #fff
      border: 1px solid rgba(0,0,0,.08)
      box-shadow: 0 2px 8px 0 rgba(0,0,0,.18)
      font-size: 13px
      display: flex
      align-items: center
      z-index: 1000021
      transition: 0.2s ease-in-out
      &:hover
        background: rgb(240,240,240)
        border: 1px solid rgb(240,240,240)
      a
        width: 100%
        height: 100%
        display: flex
        align-items: center
        padding-left: 35px
        color: rgba(0,0,0,.85)
      p
        width: 80%
        display: block
        overflow: hidden
        text-overflow: ellipsis
        white-space: nowrap

    &_times
      font-size: 22px
      color: #909090
      position: absolute
      right: 25px
      cursor: pointer
      z-index: 100001
    &_search
      box-sizing: border-box
      color: rgba(0,0,0,.85)
      width: 220px
      height: 36px
      font-size: 16px
      z-index: 100001
      padding-right: 20px
      &::placeholder
        color: #909090
        font-size: 14px
    &__rgba
      position: absolute
      top: 0
      left: 0
      width: 100vw
      height: 100vh
      z-index: 10000
</style>