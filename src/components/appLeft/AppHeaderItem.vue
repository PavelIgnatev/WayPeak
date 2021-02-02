<template>
  <router-link 
    :to="to"
    class="appHeader__item"
    :class="$route.path.includes(to) && to ? 'activeItem' : ''"
    @click.native='cl'
  >
    <div class="appHeader_block">
      <img
        :src="require(`@/${src}`)"
        class="appHeader__img invert_7"
        :class="{ invert_5: $route.path.includes(to) && to }"
      />
      <div class="date">{{ day }}</div>
    </div>
    <div class="appHeader__text" >
      {{ title }}
      <span
        v-if="
          $store.getters.returnInboxPostLength &&
          (title == 'Все' || title == 'Входящие')
        "
        >{{ $store.getters.returnInboxPostLength }}</span
      >
    </div>
    <div class="width" style="display: none"> {{wid}}</div>
  </router-link>
</template>
<script>
export default {
  name: "AppHeaderItem",
  props: ["src", "classes", "title", "classImg", "to", "active"],
  data() {
    return {
      day: "",
      width: screen.width 
    };
  },
  mounted() {
    if (this.title == "Сегодня") {
      const Data = new Date();
      this.day = Data.getDate();
    }
    if (this.title == "Завтра") {
      const Data = new Date();
      this.day = Data.getDate() + 1;
    }
  },
  methods: {
    updateWidth() {
      this.width = window.innerWidth;
    },
    cl(){
      if(this.width < 1090){
        this.$store.commit('falsehamburger')
      }
    }
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
  created() {
    window.addEventListener("resize", this.updateWidth);
  }
};
</script>
<style lang="sass">
.appHeader
  &__item
    display: flex
    box-sizing: border-box
    align-items: center
    width: 230px
    color: rgb(44,39,39)
    height: 36px
    font-size: 14px
    border-radius: 4px
    position: relative
    &:hover
      background-color: rgba(75,111,222,.12)
  &__img
    display: block
    height: 18px
    margin-right: 10px
    margin-left: 10px
    border-radius: 2px
  &_block
    position: relative
    .date
      position: absolute
      font-size: 9px
      color: white
      font-weight: 600
      top: -0.5px
      left: 14.3px
  &__text
    margin-left: 2px
    span
      position: absolute
      right: 15px
      font-size: 12px
      font-weight: 400
      color: #707070
</style>