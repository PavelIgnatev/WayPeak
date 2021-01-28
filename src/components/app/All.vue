<template >
  <div class="centerView">
    <HeaderGorizontal text="Все"></HeaderGorizontal>
    <FormSubmit></FormSubmit>
    <div class="centerView__wrapper">
      <Item
        v-for="(item, index) in this.$store.getters.returnsortInboxPost"
        :description="item[1].description"
        :data="item[1].data"
        :key="index"
        :keyy="item[0]"
        :item="item[1].text"
        push="pushPerformed"
        del="deleteMess"
        to="all"
      >
      </Item>
    </div>
  </div>
</template>
<script>
import Item from "../Item/Item";
import FormSubmit from "../formSbm/FormSubmit";
import HeaderGorizontal from "../headerGorizontal/HeaderGorizontal.vue";
export default {
  name: "All",
  data() {
    return {
      text: "",
    };
  },

  components: { HeaderGorizontal, FormSubmit, Item },
};
</script>
<style lang="sass">
</style>