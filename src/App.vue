<template>
  <div id="app">
      <router-view/>
      <ModalClose></ModalClose>
      <ModalCloseItem></ModalCloseItem>
  </div>
</template>

<script>
import ModalClose from './components/modal/modalClose'
import ModalCloseItem from './components/modal/modalCloseItem'
export default {
  name: 'App',
  components:{ModalClose, ModalCloseItem}
}
</script>
<style lang="sass">

.container
  margin: 0 47.5px
  position: relative
</style>
