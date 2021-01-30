<template >
  <div class="centerView">
    <HeaderGorizontal text="Корзина"></HeaderGorizontal>
    <div
      class="centerView__wrapper"
      v-if="Object.keys($store.getters.returnTrashPost).length"
    >
      <Item
        v-for="(item, index) in $store.getters.returnTrashPost"
        :description="item.description"
        :data="item.data"
        :key="index"
        :keyy="index"
        :item="item.text"
        push=""
        del=""
        to="trash"
      >
      </Item>
    </div>
    <div class="noTask" v-else>
      <img src="@/assets/img/icons/tr.png" class="noTask__img" />
      <div class="noTask__text">Здесь будут удалённые задачи</div>
      <div class="noTask__subtext">Нет удалённых задач</div>
    </div>
  </div>
</template>
<script>
import Item from "../Item/Item";
import HeaderGorizontal from "../headerGorizontal/HeaderGorizontal.vue";
export default {
  name: "Trash",
  data() {
    return {};
  },
  async mounted() {
    if (!Object.keys(this.$store.getters.returnTrashPost).length) {
      await this.$store.dispatch("fetchTrash");
    }
  },

  components: { HeaderGorizontal, Item },
};
</script>
<style lang="sass">
</style>