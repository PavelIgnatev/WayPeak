<template>
    <div class="appCenter">
        <router-view name="a"></router-view>
    </div>
</template>
<script>
export default {
    name: 'AppCenter'
}
</script>
<style lang="sass">
.centerView
    height: 100vh
</style>