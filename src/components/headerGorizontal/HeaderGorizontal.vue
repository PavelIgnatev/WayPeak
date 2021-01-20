<template >
    <header class="HeaderGorizontal">
        <img src="../../assets/img/icons/menu.svg" class='HeaderGorizontal__img'>
        <div class="HeaderGorizontal__text">{{text}}</div>
    </header>
</template>
<script>
export default {
    name: 'HeaderGorizontal',
    props: ['text']
}
</script>
<style lang="sass">
@import '@/assets/sass/_variables'
.HeaderGorizontal
    height: 64px
    width : 100%
    display: flex
    align-items: center
    padding-left: 2px
    &__text
        margin-left: 16px
        margin-top: 4px
        font-size: 22px
        color: rgba(0,0,0,.85)
    &__img
        margin-top: 2px
        cursor: pointer
        display: block
        width: 16px
</style>