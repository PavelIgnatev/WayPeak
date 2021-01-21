<template >
  <div class="All">
    <div class="AllLeft">
      <HeaderGorizontal text='Все'></HeaderGorizontal>
      <FormSubmit></FormSubmit>
      <div class="All__wrapper">
        <Item
          class="All__item"
          v-for="(item, index) in $store.getters.returnInboxPost"
          :key="index"
          :keyy="index"
          :item="item.text"
        >
        </Item>
      </div>
    </div>
    <div class="AllRight"><HeaderRight></HeaderRight></div>
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
<style lang="sass">
@import '@/assets/sass/_variables'
.All
  display: flex
  overflow: hidden
  max-height: 100vh
  width: 100%
  &Left
    padding: 0 25px
    width: 100%
    min-width: 700px  
  &Right 
    max-width: 400px
    min-width: 400px

  &__input
    box-sizing: border-box
    padding: 0 12px 
    height: 40px
    font-size: 14px
    border: none  
    background: white
    border-radius: 5px
    width: 100%
    color: rgba(0,0,0,.85)
    &:focus
      margin-left: -1px
      border: 1px solid #97ace9
    &::placeholder
      color: #909090
      font-size: 13.5px
</style>