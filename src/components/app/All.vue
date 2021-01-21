<template >
  <div class="All">
    <div class="AllLeft">
      <HeaderGorizontal text='Все'></HeaderGorizontal>
      <FormSubmit></FormSubmit>
    </div>
    <div class="AllRight">2</div>
  </div>
</template>
<script>
import FormSubmit from '../formSbm/FormSubmit'
import HeaderGorizontal from '../headerGorizontal/HeaderGorizontal.vue'
export default {
  name: "All",
  data() {
    return {
      text: "",
      data: [],
    };
  },
  
  components: {HeaderGorizontal, FormSubmit}
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
    width: 60%
  &Right 
    width: 40%
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