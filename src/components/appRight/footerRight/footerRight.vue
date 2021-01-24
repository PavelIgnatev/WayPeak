<template >
    <div class="footerRight">
        <div class="footerRight__wrapper" @click="open" >
             <img src="@/assets/img/icons/del.svg" class="footerRight__img invert_6" >
        </div>
       
    </div>
</template>
<script>
export default {
    name: 'footerRight',
    methods: {
        open(){
            this.$store.commit('OpenModalCloseItem')
        }
    },
}
</script>
<style lang="sass">
.footerRight
    position: absolute
    bottom: 0
    height: 40px
    width: 100%
    &__img
        top: 50%
        transform: translate(-50%, -50%)
        cursor: pointer
        display: block
        left: 50%
        width: 17px
        position: absolute
        right: 15px
    &__wrapper
        right: 0
        position: absolute
        width: 50px
        height: 100%
        &:hover
            filter: invert(0.7)
</style>