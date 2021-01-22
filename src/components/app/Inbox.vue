<template >
  <div class="All">
    <div class="AllLeft">
      <HeaderGorizontal text='Входящие'></HeaderGorizontal>
      <FormSubmit></FormSubmit>
      <div class="All__wrapper">
        <Item
          v-for="(item, index) in $store.getters.returnInboxPost"
          :key="index"
          :keyy="index"
          :item="item.text"
          push='pushPerformed'
          del='deleteMess'
          to='inbox'
        >
        </Item>
      </div>
    </div>
  </div>
</template>
<script>
import Item from "../Item/Item";
import FormSubmit from '../formSbm/FormSubmit'
import HeaderGorizontal from '../headerGorizontal/HeaderGorizontal.vue'
import HeaderRight from '../headerRight/headerRight'
export default {
  name: "All",
  data() {
    return {
      text: "",
    };
  },
  
  components: {HeaderGorizontal, FormSubmit, HeaderRight, Item}
};
</script>