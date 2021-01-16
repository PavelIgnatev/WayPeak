<template>
  <div class="home">
    <div class="container">
     <HorizontalHedaer></HorizontalHedaer>
      <router-view/>
    </div>
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
