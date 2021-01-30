<template>
  <div class="appCenter">
    <router-view name="a"></router-view>
  </div>
</template>
<script>
export default {
  name: "AppCenter",
};
</script>
<style lang="sass">
.centerView
    max-height: 100vh
    max-height: 100vh
    overflow: hidden
    &__wrapper
      height: calc(100vh - 120px)
      margin-right: 25px
      overflow: auto
    .noTask
      width: 100%
      margin-top: 110px
      &__img
        display: block
        margin: 0 auto
      &__text
        margin-top: 10px
        color: rgba(0,0,0,.36)
        font-size: 22px
        text-align: center
      &__subtext
        margin-top: 5px
        color: rgba(0,0,0,.36)
        font-size: 13px
        text-align: center
</style>