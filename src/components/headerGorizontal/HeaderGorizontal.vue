<template >
    <header class="HeaderGorizontal">
        <img src="@/assets/img/icons/menu.svg" class='HeaderGorizontal__img' @click="notActive">
        <div class="HeaderGorizontal__text">{{text}}</div>
    </header>
</template>
<script>
export default {
    name: 'HeaderGorizontal',
    props: ['text'],
    methods: {
        notActive(){
            this.$store.commit('nothamburger')
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