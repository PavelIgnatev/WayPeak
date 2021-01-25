<template >
  <div class="modalCover" @click="close" v-if="$store.getters.stateModalClose">
    <div class="modalClose">
      <div class="modalClose__text">Очистить корзину</div>
      <div class="modalClose__descr">
        Задачи будут окончательно удалены. <br />
        Очистить корзину?
      </div>
      <div class="modalClose__wrapper mt25px">
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
.mt25px
  margin-top: 25px
</style>