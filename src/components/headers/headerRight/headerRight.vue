<template >
  <div class="HeaderRight">
    <ItemData :data='data' classes="HeaderItemData"></ItemData>
  </div>
</template>
<script>
import ItemData from '../../Item/ItemData'
export default {
  name: "HeaderRight",
  props: ["data"],
  components: {ItemData}
};
</script>
<style lang="sass">
.HeaderRight
    height: 63px
    border-bottom: 1px solid rgba(0,0,0,.1)
    position: relative

</style>