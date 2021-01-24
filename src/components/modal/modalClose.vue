<template >
  <div class="modalCover" @click="close" v-if="$store.getters.stateModalClose">
    <div class="modalClose">
      <div class="modalClose__text">Очистить корзину</div>
      <div class="modalClose__descr">
        Задачи будут окончательно удалены. <br />
        Очистить корзину?
      </div>
      <div class="modalClose__wrapper">
        <button class="modalClose__close" @click="close">Закрыть</button>
        <button class="modalClose__confirm" @click="clear">Подтвердить</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "modalClose",
  methods: {
    close() {
      this.$store.commit("CloseModalClose");
    },
    clear() {
      this.$store.dispatch("deleteTrashAll");
      if (this.$route.params.id) {
        this.$router.push(`/app/trash`);
      }
      this.$store.commit("CloseModalClose");
    },
  },
};
</script>
<style lang="sass">
.modalCover
    position: fixed
    top: 0
    left: 0
    width: 100%
    height: 100%
    z-index: 10
.modalClose
    transform: scale(1)
    opacity: 1
    box-sizing: border-box
    position: relative
    width: 610px
    height: 200px
    background: white
    box-shadow: 0 2px 11px 0 rgba(0,0,0,.16)
    text-align: left
    top: 32%
    border-radius: 5px
    left: 50%
    transform: translate(-50%, -50%)
    z-index: 1000
    color: rgba(0,0,0,.85)
    padding: 0 24px 16px 24px
    z-index: 1000001
    &__text
        font-weight: 700
        font-size: 18px
    &__descr
        margin-top: 35px
        font-size: 14px
        line-height: 22px
    &__wrapper
        display: flex
        margin-top: 30px !important
        margin-left: 280px
    &__close
        font-size: 15px
        color: rgba(0,0,0,.85)
        margin-left: 12px
        padding: 5px 20px 5px 20px
        min-width: 120px
        background: rgba(46,73,136,.08)
        border: 1px solid rgba(0,0,0,.1)
        transition: 0.2s ease-in-out
        height: 35px
        &:hover
            background: rgba(46,73,136,.16)
            border: 1px solid rgba(0,0,0,.1)
        &:active, &:focus
            border: 1px solid rgba(0,0,0,.1)
    &__confirm
        font-size: 15px
        margin-left: 12px
        border-radius: 3px
        padding: 1px 20px 1px 20px
        height: 35px
        background: #4b6fde
        min-width: 120px
        color: white
        transition: 0.2s ease-in-out
        &:hover
            background: #3a53a7
</style>