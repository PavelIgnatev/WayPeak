<template >
    <div class="about">
        <div class="about__wrapper">
            <div class="about__title">Way<span>Peak</span>  - это онлайн-сервис <br> для создания множества <br> списков задач.</div>
            <div class="about__subtitle">Данный сервис поможет вам, где бы вы не находились
                .  <br>    Попробуйте. <br> Это полностью бесплатно.</div>
             <router-link to='/app' class="buttonGreen">Начать</router-link>
        </div>
        <div class="about__img"><img src="@/assets/img/icons/communication _ man, guy, person, table, stool, chair, laptop, computer, conversation, chat.svg"></div>
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
        font-size: 50px
        font-weight: 600
        line-height: 1.1
        margin-bottom: 30px
        span
            color: #35e95f
    &__subtitle
        font-size: 18px
        margin-bottom: 60px
    &__img  
        margin-top: 120px
        width:60%
        img
            float: right
            display: block
            width: 100% 
</style>