<template >
  <div class="centerView">
    <HeaderGorizontal text="Входящие"></HeaderGorizontal>
    <FormSubmit></FormSubmit>
    <div
      class="centerView__wrapper"
      v-if="Object.keys($store.getters.returnsortInboxPost).length"
    >
    
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
    <div class="noTask" v-else>
      <img src="@/assets/img/icons/all.png" class="noTask__img" />
      <div class="noTask__text">Никаких задач.</div>
      <div class="noTask__subtext">
        Готовы к новым заданиям? Нажмите на блок ввода и запишите их
      </div>
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