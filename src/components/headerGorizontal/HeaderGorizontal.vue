<template >
    <header class="HeaderGorizontal">
        <img src="@/assets/img/icons/menu.svg" class='HeaderGorizontal__img' @click="notActive">
        <div class="HeaderGorizontal__text">{{text}}</div>
        <img src="@/assets/img/icons/broom.svg" class='HeaderGorizontal__clear' @click="clear" v-if="text == 'Корзина'">
    </header>
</template>
<script>
export default {
    name: 'HeaderGorizontal',
    props: ['text'],
    methods: {
        notActive(){
            this.$store.commit('nothamburger')
        },
        clear(){
            this.$store.dispatch('deleteTrash')
        }
    },

}
</script>
<style lang="sass">
@import '@/assets/sass/_variables'
.HeaderGorizontal
    height: 64px
    display: flex
    align-items: center
    position: relative
    &__clear
        filter: invert(0.6)
        display: block
        width: 18px
        cursor: pointer
        position: absolute
        right: 75px
        top: 50%
        transform: translateY(-50%)
    &__text
        margin-left: 16px
        margin-top: 4px
        font-size: 22px
        color: rgba(0,0,0,.85)
    &__img
        margin-left: 28px
        margin-top: 2px
        cursor: pointer
        display: block
        width: 16px
</style>