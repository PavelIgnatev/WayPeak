<template >
  <div class="centerView">
    <HeaderGorizontal text="Выполнено"></HeaderGorizontal>
    <div class="centerView__wrapper grey">
      <Item
        v-for="(item, index) in $store.getters.returnPerformedPost"
        :description="item.description"
        :data="item.data"
        :key="index"
        :keyy="index"
        :item="item.text"
        push="pushMess"
        del="deletePerformed"
        to="completed"
      >
      </Item>
    </div>
  </div>
</template>
<script>
import Item from "../Item/Item";
import HeaderGorizontal from "../headerGorizontal/HeaderGorizontal.vue";
export default {
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
  color: #909090 !important
</style>