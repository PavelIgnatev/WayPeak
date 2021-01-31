<template >
  <div class="HeaderRight">
    <ItemDataRight :data="data"></ItemDataRight>
    <div class="HeaderRight__wrapper" @click="open">
      <img src="@/assets/img/icons/del.svg" class="HeaderRight__img invert_6" />
    </div>
    <div
      class="HeaderRight__wrapper"
      @click="openRest"
      style="right: 47px"
      v-if="this.$route.path.split('/')[2] == 'trash'"
    >
      <img
        src="@/assets/img/icons/restore_icon.svg"
        class="HeaderRight__img invert_6"
        style="width: 23px"
      />
    </div>
    <div class="HeaderRight__arrow" @click="closeRight">
      <img src="@/assets/img/icons/left-arrow.svg" class="invert_6" />
    </div>
  </div>
</template>
<script>
import ItemDataRight from "../../Item/ItemDataRight";
export default {
  name: "HeaderRight",
  props: ["data"],
  components: { ItemDataRight },
  methods: {
    openRest() {
      this.$store.commit("OpenReest");
    },
    open() {
      this.$store.commit("OpenModalCloseItem");
    },
    closeRight() {
      this.$store.commit("falsemenuRight");
    },
  },
};
</script>
<style lang="sass">
.HeaderRight
  height: 63px
  border-bottom: 1px solid rgba(0,0,0,.1)
  position: relative
  &__img
    display: block
    width: 20px
    top: 50%
    transform: translateY(-50%)
    right: 10px
    position: absolute
  &__wrapper
    top: 50%
    transform: translateY(-50%)
    right: 20px
    position: absolute
    width: 50px
    height: 100%
    &:hover
      cursor: pointer
      filter: invert(0.7)
  &__arrow
    display: none
    position: absolute
    top: 50%
    transform: translateY(-50%)
    left: 35px
    img
      display: block
      width: 28px
    &:hover
      cursor: pointer
      filter: invert(0.7)
</style>