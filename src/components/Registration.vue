<template >
  <form class="form" @submit.prevent="submitHandler">
    <div class="form__wrapper">
      <div class="form__text">Регистрация</div>
      <div class="form__name">
        <input
          type="text"
          name="name"
          id="name"
          @focus="focusName = true"
          @blur="focusName = false"
          v-model="name"
          :class="[
            { input__focus: focusName || name },
            {
              invalid:
                ($v.name.$dirty && !$v.name.required) ||
                ($v.name.$model && !$v.name.minLength),
            },
          ]"
        />
        <label for="name">Имя</label>
        <small v-if="$v.name.$model && !$v.name.minLength"
          >Имя длиннее 2-ух символов</small
        >
      </div>
      <div class="form__sername">
        <input
          type="text"
          name="sername"
          id="sername"
          @focus="focusSername = true"
          @blur="focusSername = false"
          v-model="Sername"
          :class="[
            { input__focus: focusSername || Sername },
            {
              invalid:
                ($v.Sername.$dirty && !$v.Sername.required) ||
                ($v.Sername.$model && !$v.Sername.minLength),
            },
          ]"
        />
        <label for="name">Фамилия</label>
        <small v-if="$v.Sername.$model && !$v.Sername.minLength"
          >Фамилия длинне 2-ух символов</small
        >
      </div>
      <div class="form__mail">
        <input
          type="mail"
          name="mail"
          @input="emailError = false"
          id="mail"
          :class="[
            { input__focus: focusMail || mail },
            {
              invalid:
                ($v.mail.$dirty && !$v.mail.required) ||
                ($v.mail.$model && !$v.mail.email) || emailError,
            },
          ]"
          @focus="focusMail = true"
          @blur="focusMail = false"
          v-model="mail"
        />
        <label for="mail">Email</label>
        <small v-if="$v.mail.$model && !$v.mail.email"
          >Неверный формат e-mail</small
        >
        <small v-if="emailError"
          >Данный e-mail уже занят другим пользователем</small
        >
      </div>
      <div class="form__password">
        <input
          :type="show ? 'text' : 'password'"
          name="password"
          id="password"
          :class="[
            { input__focus: focusPass || password },
            {
              invalid:
                ($v.password.$dirty && !$v.password.required) ||
                ($v.password.$model && !$v.password.minLength),
            },
          ]"
          @focus="focusPass = true"
          @blur="focusPass = false"
          v-model="password"
        />
        <label for="password">Пароль</label>
        <small v-if="$v.password.$model && !$v.password.minLength"
          >Введите пароль длиннее 6-ти символов</small
        >
        <div class="ShowHide"><img v-if="show" v-on:click="show = !show" src="../assets/img/icons/hide.svg" class="invert_5" alt="hide"><img v-if="!show" v-on:click="show = !show"  src="../assets/img/icons/show.svg" class="invert_5" alt="show"></div>
      </div>
      <button
        class="form__comin"
        type="submit"
        :class="{
          comin__disabled:
            ($v.Sername.$model && !$v.Sername.minLength) ||
            ($v.name.$model && !$v.name.minLength) ||
            ($v.password.$model && !$v.password.minLength) ||
            ($v.mail.$model && !$v.mail.email) ||
            !$v.Sername.$model ||
            !$v.name.$model ||
            !$v.password.$model ||
            !$v.mail.$model,
        }"
      >
        Войти
      </button>
      <div class="registration mt50px">
        У вас уже есть аккаунт?
        <router-link to="/auth/sign-in">Войти</router-link>
      </div>
    </div>
  </form>
</template>
<script>
import { email, required, minLength} from "vuelidate/lib/validators";
export default {
  name: "Registration",
  data() {
    return {
      focusName: false,
      name: "",
      focusSername: false,
      Sername: "",
      focusMail: false,
      mail: "",
      focusPass: false,
      password: "",
      show: false,
      emailError: false
    };
  },
  validations: {
    name: { minLength: minLength(2), required },
    Sername: { minLength: minLength(2), required },
    mail: { email, required },
    password: { minLength: minLength(7), required },
  },
  methods: {
    async submitHandler() {
      if (this.$v.$invalid) {
        this.$v.$touch();
        return;
      }
      const formData = {
        name: this.name,
        sername: this.Sername,
        email: this.mail,
        password: this.password,
      };
      try{
        await this.$store.dispatch('register', formData)
        this.$router.push("/");
  
      }catch(e){
        this.emailError = true
      }
      
    },
  },
};
</script>
<style lang="sass">
.mt50px
  margin-top: 50px
</style>