<template >
  <div class="centerView">
    <HeaderGorizontal text="Все"></HeaderGorizontal>
    <FormSubmit></FormSubmit>
    <div class="centerView__wrapper" v-if="Object.keys($store.getters.returnsortInboxPost).length">
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
    <div class="noTask" v-else-if="!Object.keys($store.getters.returnsortInboxPost).length">
      <img src="@/assets/img/icons/all.png" class="noTask__img">
      <div class="noTask__text">Вы выполнили все задачи.</div>
      <div class="noTask__subtext">Готовы к новым заданиям? Нажмите на блок ввода и запишите их</div>
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