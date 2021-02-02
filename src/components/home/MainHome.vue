<template >
  <div class="Main">
    <div class="Main-home">
      <div class="Main-home__wrapper">
        <div class="Main-home__heading">
          Оставайтесь <br> организованными <br> Оставайтесь <br> креативными
        </div >
        <div class="Main-home__subtitle">
          Присоединяйтесь к миллионам людей, чтобы начать реализовывать идеи,
          стать организованее и делать что-то творческое каждый день.
        </div>
        <router-link to='/app' class="buttonGreen">Начать</router-link>
      </div>
      <div class="Main-home__img"><img src="@/assets/img/icons/mainHome.png" alt=""></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Main",
};
</script>
<style lang="sass">
@import '@/assets/sass/_variables'
.Main
    &-home
        margin-top: 100px
        width: 100%
        display: flex
        &__heading
            font-weight: 600
            font-size: 65px
            line-height: 1.4
            margin-bottom: 32px
        &__subtitle
            font-size: 18px
            line-height: 1.8
            margin-bottom: 66px
        &__img
            display: block
            width: 56%
            padding-top: 120px
            float: right
            img
                width: 100%
                float: right



</style>