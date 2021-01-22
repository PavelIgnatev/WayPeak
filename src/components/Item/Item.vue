<template >
  <div class="Item">
    <div
      class="Item__check"
      @click="func"
      :class="{ active: to == 'completed' }"
    ></div>
    <router-link
      :to="'/app/' + to + '/' + keyy"
      class="Item__a"
      :key="keyy"
    >
      <div class="Item__wrapper">
        <div class="Item__item" :class="{it: !$store.getters.returnHamburgerMenu}">
          {{ item }}
          <div class="Item__exit" @click="func2">&times;</div>
        </div>
      </div>
    </router-link>
  </div>
</template><script>
export default {
  name: "Item",
  props: ["item", "keyy", "push", "del", "to"],
  methods: {
    async func() {
      const fromData = {
        id: this.keyy,
        text: this.item,
      };
      await this.$store.dispatch(`${this.push}`, fromData);
      await this.$store.dispatch(`${this.del}`, fromData);
    },
    async func2() {
      const fromData = {
        id: this.keyy,
        text: this.item,
      };
      await this.$store.dispatch(`${this.del}`, fromData);
    },
  },
};
</script>
<style lang="sass">
@import '@/assets/sass/_variables'
.Item
    height: 40px
    cursor: pointer
    display: flex
    width: 100%
    font-size: 14px
    position: relative
    align-items: center
    box-shadow: rgb(108, 190, 94) 3px 0px 0px inset
    &__exit
        font-size: 25px
        position: absolute
        right: 25px
        width: 25px
        top: 0
        right: 0
        display: flex
        justify-content: center
        align-items: center
        color: #808080
        z-index: 10000
    &__a
        margin: 0 20px
        display: flex
        align-items: center
        width: 100%
        height: 100%
        color: rgba(0,0,0,.9)

    &__wrapper
        width: 100%
        margin-left: 16px
        display: flex
        align-items: center
        
        position: relative
        padding-right: 20px
        overflow: hidden
    &__item
        margin-left: 20px
        margin-top: 3px
        width: 100% 
        white-space: nowrap
        text-overflow: ellipsis
        max-width: 34vw
        overflow: hidden
    .router-link-active
        background-color: rgba(75,111,222,.12)
        border-radius: 5px
    &__check
        position: absolute
        left: 30px
        width: 11px
        height: 11px
        border: 1px solid #808080
        z-index: 10000
    .active
        filter: invert(0.5)
        width: 13px
        height: 13px
        border: none
        display: block
        background: url('../../assets/img/icons/check.svg') center center/cover no-repeat
    .it
        max-width: 45vw
</style>