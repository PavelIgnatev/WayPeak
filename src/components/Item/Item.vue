<template >
  <div class="Item" @click='activeRight'>
    <div
      class="Item__check"
      @click="func"
      :class="[{ active: to == 'completed' }, { notAllowed: to == 'trash' }]"
    ></div>
    <router-link :to="'/app/' + to + '/' + keyy" class="Item__a" :key="keyy" @click="this.$store.commit('truemenuRight')">
      <div class="Item__wrapper">
        <div
          class="Item__item"
          :class="{ it: !$store.getters.returnHamburgerMenu }"
        >
          {{ item.replace(/\s+/g, " ").trim() }}
          <ItemData :data="data" v-if="to != 'completed'"></ItemData>
        </div>
      </div>
    </router-link>
    <div class="width" style="display: none"> {{wid}}</div>
  </div>
</template><script>
import ItemData from "./ItemData";
export default {
  name: "Item",
  props: ["item", "keyy", "push", "del", "to", "data", "description"],
  data() {
    return { width: screen.width };
  },
  methods: {
    async func() {
      const fromData = {
        id: this.keyy,
        text: this.item,
        data: this.data,
        description: this.description,
      };
      await this.$store.dispatch(`${this.push}`, fromData);
      await this.$store.dispatch(`${this.del}`, fromData);
    },
    updateWidth() {
      this.width = window.innerWidth;
    },
    activeRight(){
      this.$store.commit('truemenuRight')
      if(this.width <= 1090){
        this.$store.commit('falsehamburger')
      }
    }
  },
  created() {
    window.addEventListener("resize", this.updateWidth);
  },
  computed:{
    wid(){
      if(this.width <= 1090){
        this.$store.commit('falsehamburger')}
      if(this.width <= 920){
          this.$store.commit('falsemenuRight')
        }
      if(this.width > 920){ 
        this.$store.commit('truemenuRight')}
      if(this.width > 1090){
          this.$store.commit('truehamburger')
        }
      

    }
  },
  components: { ItemData },
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
    max-width: 42vw
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
    z-index: 100000000000000000
  .active
    filter: invert(0.7)
    width: 13px
    height: 13px
    border: none
    display: block
    background: url('../../assets/img/icons/check.svg') center center/cover no-repeat
  .it
    max-width: 63vw
  .notAllowed
    border: 1px solid red !important
    cursor: not-allowed
</style>