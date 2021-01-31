<template>
  <div id="app">
      <router-view/>
      <ModalClose></ModalClose>
      <ModalCloseItem></ModalCloseItem>
      <ModalReestablish></ModalReestablish>
  </div>
</template>

<script>
import ModalClose from './components/modal/modalClose'
import ModalReestablish from './components/modal/modalReestablish'
import ModalCloseItem from './components/modal/modalCloseItem'
export default {
  name: 'App',
  components:{ModalClose, ModalCloseItem, ModalReestablish}
}
</script>
<style lang="sass">

.container
  margin: 0 47.5px
  position: relative
</style>
