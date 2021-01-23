<template >
  <div class="centerView">
      <HeaderGorizontal text='Корзина'></HeaderGorizontal>
      <div class="centerView__wrapper">
        <Item
          v-for="(item, index) in $store.getters.returnTrashPost"
          :data='item.data'
          :key="index"
          :keyy="index"
          :item="item.text"
          push=''
          del=''
          to='trash'
        >
        </Item>
      </div>
  </div>
</template>
<script>
import Item from "../Item/Item";
import HeaderGorizontal from '../headerGorizontal/HeaderGorizontal.vue'
export default {
  name: "Trash",
  data() {
    return {
    };
  }, async mounted() {
    if (!Object.keys(this.$store.getters.returnTrashPost).length) {
      await this.$store.dispatch("fetchTrash");
    }
  },
  
  components: {HeaderGorizontal, Item}
};
</script>
<style lang="sass">

</style>