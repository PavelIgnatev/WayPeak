<template >
  <div class="auth">
    <div class="Login__icon">
      <router-link to="/" class="HorizontalHeader__icon"
        >Way<span>Peak</span></router-link
      >
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "auth",
  component: {},
};
</script>
<style lang="sass">
@import '../assets/sass/_variables'
.Login
  &__icon
    margin-top: 64px
    margin-bottom: 64px
.form
  &__subheader
    color: #212529
    font-size: 14px
    line-height: 18px
  &__icon
    margin-top: 64px
    margin-bottom: 64px
  &__wrapper
    width: 350px
    height: 390px
    padding: 52px 76px 36px 76px
    background: $white
    margin: 0 auto
  &__text
    letter-spacing: -0.5px
    font-size: 20px
    font-weight: 700
    margin-bottom: 46px
  &__mail, &__password, &__name, &__sername
    color: rgba(0,0,0,0.30)
    font-size: 14px
    height: 40px
    width: 100%
    position: relative
    display: flex
    align-items: flex-end
    margin-bottom: 20px
    small
      user-select: none
      position: absolute
      top: 35px
      font-size: 10.5px
      color: red
  &__comin
    font-size: 14px
    color: white
    margin-top: 100px
    width: 100%
    height: 40px
    border: none
    background: $green
    border-radius: 4px
    cursor: pointer
    position: relative
    user-select: none
    &:hover
      background: $twogreen
  .comin__disabled
    background: rgba(0,0,0,0.13)
    pointer-events: none
    cursor: pointer
  .forgot_password
    display: block
    margin-top: 30px
    margin-bottom: 55px
    width: 100%
    font-size: 15px
    text-align: center
    color: rgba(0,0,0,0.35)
    text-decoration: none
  .registration
    text-align: center
    font-size: 14px
    a
      transition: 0.2s ease-in-out
      font-weight: 700
      color: black
      font-size: 15px
      position: relative
      letter-spacing: -1px
      &::after
        transition: 0.2s ease-in-out
        content: ''
        width: 100%
        height: 2px
        background: $green
        position: absolute
        left: 0
        bottom: -5px
      &:hover
        color: rgba(0,0,0,.9)
        &::after
          background: black
label
  transition: 0.3s ease-in-out
  position: absolute
  left: 0
  bottom: 0
.input__focus
  border-bottom: 2px solid $twogreen !important
  user-select: none
.input__focus + label, input:invalid + label
  transition: 0.3s ease-in-out
  bottom: 20px
  user-select: none
  font-size: 12px
input
  margin-top: 20px
  border: none
  box-sizing: border-box
  margin: 0
  padding: 0
  width: 100%
  height: 20px
  border-bottom: 1px solid rgba(0,0,0,0.25)
  &:hover
    border-bottom: 1px solid $twogreen
.invalid
  border-bottom: 2px solid red !important
.ShowHide
  display: flex
  justify-content: center
  align-items: center
  width: 25px
  position: absolute
  right: 0
  bottom: 5px
  cursor: pointer
  img
    display: block
    width: 100%
</style>