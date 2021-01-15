<template >
  <header class="HorizontalHeader" v-if="!$route.path.includes('/auth')">
    <nav class="HorizontalHeader__nav">
      <router-link to="/" class="HorizontalHeader__icon"
        >Way<span>Peak</span></router-link
      >
      <div class="HorizontalHeader__wrapper">
        <router-link to="/wayPeak" class="HorizontalHeader__link"
          >О WayPeak
        </router-link>
        <router-link to="/company" class="HorizontalHeader__link"
          >О продукте
        </router-link>
        <router-link to="/company" class="HorizontalHeader__link"
          >Журнал
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
      <button @click.prevent:="quit" style="position: absolute; top: 400px">
        выйтиии
      </button>
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
  methods: {
    async quit() {
      await this.$store.dispatch("logout");
      this.$router.push("/auth");
    },
  }
};
</script>
<style lang="sass">
@import '../assets/sass/_variables'
.HorizontalHeader
    height: 120px
    width: 100%
    background: $white
    color: $black
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
        color: $black
        font-size: 30px
        display: flex
        justify-content: center
        align-items: center
        span
            color: $green
    &__link
        transition: 0.2s ease-in-out
        font-size: 18px
        color: $black
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
            width: 23px
            z-index: 1000
            background-color: $black
            transition: 0.2s ease-in-out
            mask: url('../assets/img/icons/login.svg') no-repeat center / contain
        .green
            transition: 0.2s ease-in-out
            background-color: $green
            color: green
        p
            padding-left: 5px
</style>