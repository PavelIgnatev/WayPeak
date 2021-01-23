<template >
  <div class="centerView">
      <HeaderGorizontal text='Все'></HeaderGorizontal>
      <FormSubmit></FormSubmit>
      <div class="centerView__wrapper">
        <Item
          v-for="(item, index) in $store.getters.returnInboxPost"
          :data='item.data'
          :key="index"
          :keyy="index"
          :item="item.text"
          push='pushPerformed'
          del='deleteMess'
          to='all'
        >
        </Item>
      </div>
  </div>
</template>
<script>
import Item from "../Item/Item";
import FormSubmit from '../formSbm/FormSubmit'
import HeaderGorizontal from '../headerGorizontal/HeaderGorizontal.vue'
export default {
  name: "All",
  data() {
    return {
      text: "",
    };
  },
  
  components: {HeaderGorizontal, FormSubmit, Item}
};
</script>
<style lang="sass">

</style>