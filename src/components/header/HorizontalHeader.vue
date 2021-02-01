<template >
  <header class="HorizontalHeader">
    <nav class="HorizontalHeader__nav">
      <router-link to="/" class="HorizontalHeader__icon" @click.native='$store.commit("falsemenuActive")'
        >Way<span>Peak</span></router-link
      >
      <div class="HorizontalHeader__wrapper" v-show="$store.getters.returnmenuActive || width > 920">
        <router-link to="/app" class="HorizontalHeader__link" @click.native='$store.commit("falsemenuActive")'
          >Начать
        </router-link>
        <router-link to="/about" class="HorizontalHeader__link" @click.native='$store.commit("falsemenuActive")'
          >О проекте
        </router-link>
        <!-- <router-link to="/support" class="HorizontalHeader__link" @click.native='$store.commit("falsemenuActive")'
          >Поддержка
        </router-link> -->
        <router-link
          to="/auth/sign-in"
          class="HorizontalHeader__link HorizontalHeader__login" @click.native='$store.commit("falsemenuActive")'
        >
          <span
            :class="{ green: green }"
            @mouseover="green = !green"
            @mouseout="green = !green"
            v-on:click="green = !green"
          ></span>
          <p
            @mouseover="green = !green"
            @mouseout="green = !green"
            v-on:click="green = !green"
          >
            Войти
          </p>
        </router-link>
      </div>
      <div class="humb" :class='{humbActive: $store.getters.returnmenuActive}' @click="$store.commit('notmenuActive')" style="display: none">
        <div class="humb_line"></div>
        <div class="humb_line"></div>
        <div class="humb_line"></div>  
      </div>
    </nav>
  </header>
</template>
<script>
export default {
  name: "HorizontalHeader",
  data() {
    return {
      green: !true,
      act: false, 
      width: screen.width
    };
  },
  methods: {
    updateWidth() {
      this.width = window.innerWidth;
    }
  },
  created() {
    window.addEventListener("resize", this.updateWidth);
  }
};
</script>
<style lang="sass">
@import '@/assets/sass/_variables'
.HorizontalHeader
  transition: 0.5s ease-in-out
  height: 80px
  width: 100%
  user-select: none
  background: $white
  color: black
  display: flex
  align-items: center
  &__wrapper
    display: flex
  &__nav
    display: flex
    align-items: center
    justify-content: space-between
    width: 100%
    position: relative
    height: 50px
  &__icon
    color: black
    font-size: 30px
    display: flex
    justify-content: center
    align-items: center
    span
      color: $green
  &__link
    transition: 0.2s ease-in-out
    font-size: 18px
    color: black
    margin-right: 32px
    &:hover
      color: $green
    &:last-child
      margin-left: 50px
      margin-right: 5px
  &__login
    z-index: 10
    display: flex
    span
      content: ''
      width: 18px
      z-index: 1000
      background-color: black
      transition: 0.2s ease-in-out
      mask: url('../../assets/img/icons/login.svg') no-repeat center / contain
    .green
      transition: 0.2s ease-in-out
      background-color: $green
      color: green
    p
      padding-left: 5px
.humb
  transition: 0.2s ease-in-out
  position: absolute
  top: 50%
  transform: translateY(-50%)
  right: 0
  z-index: 100000000000
  width: 30px
  height: 30px
  cursor: pointer
  display: flex
  flex-direction: column
  justify-content: space-around
  & > div 
    transition: 0.2s ease-in-out
    width: 100%
    height: 2px 
    background: $green

.humbActive
  transition: 0.2s ease-in-out
  display: flex
  flex-direction: column
  align-items: center
  div
    transition: 0.2s ease-in-out
    &:nth-child(1)
      position: absolute
      transform: rotate(45deg) !important
    &:nth-child(2)
      display: none
    &:nth-child(3)
      position: absolute
      transform: rotate(-45deg) !important
      
</style>