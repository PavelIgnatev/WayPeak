<template>
  <div id="app">
    <div class="container">
      <HorizontalHedaer></HorizontalHedaer>
      <router-view/>
    </div>
  </div>
</template>

<script>
import HorizontalHedaer from '@/components/HorizontalHeader.vue'
export default {
  name: 'App',
  components: {
    HorizontalHedaer
  }
}
</script>
<style lang="sass">
@import './assets/sass/_variables'
.container
  margin: 0 47.5px
  position: relative
</style>
