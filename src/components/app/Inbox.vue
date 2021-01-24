<template >
  <div class="centerView">
    <HeaderGorizontal text="Входящие"></HeaderGorizontal>
    <FormSubmit></FormSubmit>
    <div class="centerView__wrapper">
      <Item
        v-for="(item, index) in $store.getters.returnInboxPost"
        :description="item.description"
        :data="item.data"
        :key="index"
        :keyy="index"
        :item="item.text"
        push="pushPerformed"
        del="deleteMess"
        to="inbox"
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
  name: "Inbox",
  data() {
    return {
      text: "",
    };
  },

  components: { HeaderGorizontal, FormSubmit, Item },
};
</script>