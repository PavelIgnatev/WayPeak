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
@import '@/assets/sass/_variables'
.buttonGreen
  display: block
  text-align: center
  background: $green
  width: 240px
  padding: 12px 0
  border-radius: 5px
  font-weight: 600
  color: white
  padding-bottom: 14px
  font-size: 22px
  transition: 0.2s ease-in-out
  cursor: pointer
  user-select: none
  margin-bottom: 75px
  &:hover
    background: $twogreen

</style>
