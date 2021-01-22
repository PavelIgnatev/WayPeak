<template >
    <li class="AppSetting">
        <router-link :to='to' class="AppSetting_a">{{text}}</router-link>
    </li>
</template>
<script>
export default {
    name: 'AppSetting',
    props: ['text', 'to']
}
</script>
<style lang="sass">
.AppSetting
    width: 100%
    &_a
        padding: 0 15px
        box-sizing: border-box
        display: block
        color: rgba(0,0,0,.85)
        font-size: 13px
        line-height: 16px
        width: 100%
        height: 36px
        display: flex
        align-items: center
        &:hover
            background-color: rgba(75,111,222,.12)
    &_button
        text-align: left
        width: 100%
        padding: 0 15px
        color: rgba(0,0,0,.85)
        box-sizing: border-box
        height: 100%
        cursor: pointer
        background: white
        
</style>