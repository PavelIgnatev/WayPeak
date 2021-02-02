<template >
    <div class="about">
        <div class="about__wrapper">
            <div class="about__title">Way<span>Peak</span>  - это онлайн-сервис <br> для создания множества списков задач.</div>
            <div class="about__subtitle">Данный сервис доступен на любом устройстве.  <br>    Попробуйте. <br> Это полностью бесплатно.</div>
             <router-link to='/app' class="buttonGreen">Начать</router-link>
        </div>
        <div class="about__img"><img src="@/assets/img/icons/logo-ok.png"></div>
    </div>
</template>
<script>
export default {
    name: 'aboutWayPeak'
}
</script>
<style lang="sass">
.about 
    display: flex
    &__wrapper
        width: 100%
    &__title
        margin-top: 140px
        font-size: 45px
        font-weight: 400
        line-height: 1.1
        margin-bottom: 30px
        span
            color: #35e95f
    &__subtitle
        font-size: 18px
        margin-bottom: 60px
    &__img  
        margin-top: 70px
        width:50%
        img
            float: right
            display: block
            width: 100% 
</style>