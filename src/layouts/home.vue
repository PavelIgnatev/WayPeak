<template>
  <div class="home">
    <div class="container">
     <HorizontalHedaer ></HorizontalHedaer>
      <router-view style=""/>
    </div>
</div>
</template>

<script>
import HorizontalHedaer from '@/components/header/HorizontalHeader.vue'
export default {
  metaInfo: {
    title: 'WayPeak'
  },
  name: 'Home',
  components: {
    HorizontalHedaer
  }
}
</script>
<style lang="sass">

.container
  margin: 0 auto
  width: calc(100% - 125px)
  max-width: 1250px
  position: relative
</style>
