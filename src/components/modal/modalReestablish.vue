<template>
  <div class="modalCover" v-if="$store.getters.stateReest" @click="close">
    <div class="modalClose">
      <div
        class="modalClose__text"
        v-if="this.$route.path.split('/')[2] == 'trash'"
      >
        Восстановить
      </div>
      <div
        class="modalClose__descr"
        v-if="this.$route.path.split('/')[2] == 'trash'"
      >
        Задача будет перемещена во входящие. Вы уверены?
      </div>
      <div class="modalClose__wrapper">
        <button class="modalClose__close" @click="close">Закрыть</button>
        <button class="modalClose__confirm" @click='Reestablish'>Восстановить</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "modalReestablish",
  data() {
    return {
      paths: {
        trash: "returnTrashPost",
      },
      Reest: {
        all: "deleteMess",
        search: "deleteMess",
        inbox: "deleteMess",
        completed: "deletePerformed",
      },
    };
  },
  methods: {
    close() {
      this.$store.commit("CloseReest");
    },
    async Reestablish() {
      let fromData = {
        id: this.$route.params.id,
        data: this.$store.getters.returnTrashPost[this.id].data,
        description: this.$store.getters.returnTrashPost[this.id].description,
        text: this.$store.getters.returnTrashPost[this.id].text,
      };
      await this.$store.dispatch("pushMess", fromData);
      await this.$store.dispatch("deleteTrash", fromData);
      if (this.$route.params.id) {
          this.$router.push(`/app/trash`);
        }
    },
  },
  computed: {
    id() {
      return this.$route.params.id;
    },
  },
};
</script>
<style lang="">
</style>