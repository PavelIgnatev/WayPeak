<template >
  <div class="auth">
    <div class="Login__icon">
      <router-link to="/" class="">Way<span>Peak</span></router-link>
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
    text-align: center
    color: black
    font-size: 30px
    span
      color: $green
    a
      color: $black
      font-size: 30px
    margin-top: 64px
    margin-bottom: 64px
.form
  &__subheader
    color: #212529
    font-size: 14px
    line-height: 18px
  &__send_text
    color: #212529
    font-size: 16px
    line-height: 22px
    span
      font-weight: 700
  &__icon
    margin-top: 64px
    margin-bottom: 64px
  &__wrapper
    width: 350px
    height: 390px
    padding: 52px 76px 36px 76px
    background: $white
    color: $black
    margin: 0 auto
  &__text
    letter-spacing: -0.5px
    font-size: 20px
    font-weight: 700
    margin-bottom: 46px
  &__checkbox
    margin-top: 3.5px
    margin-right: 5px
    position: relative
    z-index: 100
    width: 12px
    height: 12px
    border: 2px solid rgb(180, 185, 203)
    cursor: pointer
    transition: 0.1s ease-in-out
    border-radius: 2px
    &:hover
      border: 2px solid $green
    &_active
      background: $green
      border: 2px solid $green
    &::after
      content: ''
      position: absolute
      top: 7.5px
      left: 0px
      width: 6px
      height: 1px
      background: white
      transform: rotate(40deg)
    &::before
      content: ''
      position: absolute
      top: 5.5px
      left: 3px
      width: 10px
      height: 1px
      background: white
      transform: rotate(-50deg)
  input[type="checkbox"]
    display: none
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
    margin-top: 70px
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
.input__focus + label, input:invalid + label
  transition: 0.3s ease-in-out
  bottom: 20px
  font-size: 12px
input
  background: white
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
.form__checbox
  &_text
    width: 100%
    display: block
    font-size: 13px
.form__check
  display: block
  margin-top: 5px
  margin-right: 5px
  width: 15px
  height: 15px
  border: none
  outline: none
.sendAgain
  margin-top: 160px
  font-size: 13px
  margin-bottom: 60px
  &_send
    color: $green
    display: inline
    cursor: pointer
    font-weight: 700
  &_time
    display: inline
    color: rgb(180, 185, 203)
    font-size: 12px
.inactive
  pointer-events: none
  color: rgb(180, 185, 203)
</style>