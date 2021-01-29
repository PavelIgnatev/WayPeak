<template >
  <div class="appHeader__input">
    <input
      type="text"
      placeholder="Поиск"
      class="appHeader__input_search"
      v-model="search"
    />
    <div class="appHeader__input_times" @click="search = ''">&times;</div>
    <div class="appHeader__input__rgba" @click="$store.commit('falseinputActive')"></div>
  </div>
</template>
<script>
export default {
  name: "modalInputSearch",
  data() {
    return { search: "" };
  },
};
</script>
<style lang="sass">
.appHeader
    &__input
        position: absolute
        min-width: 260px
        max-width: 260px
        height: 64px
        background: white
        display: flex
        justify-content: center
        align-items: center
        &_times
            font-size: 22px
            color: #909090
            position: absolute
            right: 25px
            cursor: pointer
            z-index: 100001
        &_search
            box-sizing: border-box
            color: rgba(0,0,0,.85)
            width: 220px
            height: 36px
            font-size: 16px
            z-index: 100001
            padding-right: 20px
            &::placeholder
                color: #909090
                font-size: 14px
        &__rgba
            position: absolute
            top: 0
            left: 0
            width: 100vw
            height: 100vh
            z-index: 10000
</style>