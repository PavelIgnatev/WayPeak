<template >
  <div class="blockRight" v-if="$route.params.id">
    <HeaderRight></HeaderRight>
     {{ $route.params.id }}
  </div>
  <div class="blockRightNone" v-else-if="!$route.params.id">
    <img
      src=""
      class="blockRight__Img"
    />
  </div>
</template>
<script>
import HeaderRight from '../headers/headerRight/headerRight'
export default {
  name: 'blockRight',
  components: {HeaderRight}

};
</script>
<style lang="sass">

</style>