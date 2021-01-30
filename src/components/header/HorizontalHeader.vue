<template >
  <header class="HorizontalHeader">
    <nav class="HorizontalHeader__nav">
      <router-link to="/" class="HorizontalHeader__icon"
        >Way<span>Peak</span></router-link
      >
      <div class="HorizontalHeader__wrapper">
        <router-link to="/app" class="HorizontalHeader__link"
          >Начать
        </router-link>
        <router-link to="/media" class="HorizontalHeader__link"
          >О WayPeak
        </router-link>
        <router-link to="/support" class="HorizontalHeader__link"
          >Поддержка
        </router-link>
        <router-link
          to="/auth/sign-in"
          class="HorizontalHeader__link HorizontalHeader__login"
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
    </nav>
  </header>
</template>
<script>
export default {
  name: "HorizontalHeader",
  data() {
    return {
      green: !true,
    };
  },
};
</script>
<style lang="sass">
@import '@/assets/sass/_variables'
.HorizontalHeader
  height: 120px
  width: 100%
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
</style>