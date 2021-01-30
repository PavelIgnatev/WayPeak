<template >
  <div
    class="modalCover"
    @click="close"
    v-if="$store.getters.stateModalCloseItem"
  >
    <div class="modalClose">
      <div
        class="modalClose__text"
        v-if="this.$route.path.split('/')[2] == 'trash'"
      >
        Удалить навсегда
      </div>
      <div
        class="modalClose__text"
        v-else-if="this.$route.path.split('/')[2] != 'trash'"
      >
        Переместить в корзину
      </div>
      <div
        class="modalClose__descr"
        v-if="this.$route.path.split('/')[2] == 'trash'"
      >
        Задача будет удалена безвозвратно. Вы уверены?
      </div>
      <div
        class="modalClose__descr"
        v-else-if="this.$route.path.split('/')[2] != 'trash'"
      >
        Задача будет перемещена в корзину. Вы уверены?
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
  name: "modalCloseItem",
  data() {
    return {
      paths: {
        all: "returnInboxPost",
        search: "returnInboxPost",
        inbox: "returnInboxPost",
        completed: "returnPerformedPost",
        trash: "returnTrashPost",
      },
      del: {
        all: "deleteMess",
        search: "deleteMess",
        inbox: "deleteMess",
        completed: "deletePerformed",
      },
    };
  },
  methods: {
    close() {
      this.$store.commit("CloseModalCloseItem");
    },
    async clear() {
      let fromData = {
        id: this.$route.params.id,
        data: this.$store.getters[this.to][this.id].data,
        description: this.$store.getters[this.to][this.id].description,
        text: this.$store.getters[this.to][this.id].text,
      };
      if (this.$route.path.split("/")[2] == "trash") {
        await this.$store.dispatch(`deleteTrash`, fromData);
        if (this.$route.params.id) {
          this.$router.push(`/app/trash`);
        }
      } else {
        await this.$store.dispatch(
          `${this.del[this.$route.path.split("/")[2]]}`,
          fromData
        );
        await this.$store.dispatch(`pushTrash`, fromData);
        if (this.$route.params.id) {
          this.$router.push(`/app/${this.$route.path.split("/")[2]}`);
        }
      }
    },
  },
  computed: {
    to() {
      return this.paths[this.$route.path.split("/")[2]];
    },
    id() {
      return this.$route.params.id;
    },
  },
};
</script>
<style lang="sass">
.modalCover
  position: absolute
  top: 0
  left: 0
  right: 0
  bottom: 0
  width: 100vw
  height: 100vh
  z-index: 1000000
.modalClose
  box-sizing: border-box
  position: absolute
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
  &__text
    margin-top: 15px
    font-weight: 700
    font-size: 18px
  &__descr
    margin-top: 35px
    font-size: 14px
    line-height: 22px
  &__wrapper
    display: flex
    margin-top: 45px
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