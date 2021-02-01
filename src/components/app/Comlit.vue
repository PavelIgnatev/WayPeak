<template >
  <div class="centerView">
    <HeaderGorizontal text="Выполнено"></HeaderGorizontal>
    <div class="centerView__wrapper" v-if="Object.keys($store.getters.returnPerformedPost).length"
    >
      <Item
        v-for="(item, index) in $store.getters.returnPerformedPost"
        :description="item.description"
        :data="item.data"
        :key="index"
        :keyy="index"
        :item="item.text"
        classes='grey'
        push="pushMess"
        del="deletePerformed"
        to="completed"
      >
      </Item>
    </div>
    <div class="noTask" v-else>
      <img src="@/assets/img/icons/compl.png" class="noTask__img" />
      <div class="noTask__text">Работай усерднее!</div>
      <div class="noTask__subtext">Нет выполненных задач</div>
    </div>
  </div>
</template>
<script>
import Item from "../Item/Item";
import HeaderGorizontal from "../headerGorizontal/HeaderGorizontal.vue";
export default {
  metaInfo: {
    title: 'Выполнено'
  },
  name: "Complit",
  data() {
    return {};
  },
  async mounted() {
    if (!Object.keys(this.$store.getters.returnPerformedPost).length) {
      await this.$store.dispatch("fetchPerformed");
    }
  },

  components: { HeaderGorizontal, Item },
};
</script>
<style lang="sass">
.grey
  opacity: .6
</style>