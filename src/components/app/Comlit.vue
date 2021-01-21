<template >
  <div class="All">
    <div class="AllLeft">
      <HeaderGorizontal text='Выполнено'></HeaderGorizontal>
      <Item
          class="All__item"
          v-for="(item, index) in $store.getters.returnPerformedPost"
          :key="index"
          :keyy="index"
          :item="item.text"
        >
        </Item>
    </div>
    <div class="AllRight"><HeaderRight></HeaderRight></div>
  </div>
</template>
<script>
import Item from "../Item/Item";
import HeaderGorizontal from '../headerGorizontal/HeaderGorizontal.vue'
import HeaderRight from '../headerRight/headerRight'
export default {
  name: "Complit",
  data() {
    return {

    };
  },
    async mounted() {
    if (!Object.keys(this.$store.getters.returnPerformedPost).length) {
      await this.$store.dispatch("fetchPerformed");
    }
  },
  
  components: {HeaderGorizontal, HeaderRight, Item}
};
</script>
<style lang="sass">

</style>