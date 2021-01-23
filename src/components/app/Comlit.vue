<template >
  <div class="All">
    <div class="AllLeft">
      <HeaderGorizontal text='Выполнено'></HeaderGorizontal>
      <div class="All__wrapper nenn">
        <Item
          v-for="(item, index) in $store.getters.returnPerformedPost"
          :key="index"
          :keyy="index"
          :item="item.text"
          push='pushMess'
          del='deletePerformed'
          to='completed'
        >
        </Item>
      </div>
    </div>  
  </div>
</template>
<script>
import Item from "../Item/Item";
import HeaderGorizontal from '../headerGorizontal/HeaderGorizontal.vue'
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
  
  components: {HeaderGorizontal, Item}
};
</script>
<style lang="sass">
.nenn
  color: #909090 !important
</style>