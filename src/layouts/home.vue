<template>
  <div class="home">
     <HorizontalHedaer></HorizontalHedaer>
      <router-view/>
</div>
</template>

<script>
import HorizontalHedaer from '@/components/header/HorizontalHeader.vue'
export default {
  name: 'Home',
  components: {
    HorizontalHedaer
  }
}
</script>
<style lang="sass">

.container
  margin: 0 47.5px
  position: relative
</style>
