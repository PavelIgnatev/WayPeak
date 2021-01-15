<template>
  <form class="form" @submit.prevent="submitHandler">
    <div class="form__wrapper">
      <div class="form__text">Войти</div>
      <div class="form__mail">
        <input
          type="mail"
          name="mail"
          id="mail"
          :class="[
            { input__focus: focusMail || mail },
            {
              invalid:
                ($v.mail.$dirty && !$v.mail.required) ||
                ($v.mail.$model && !$v.mail.email),
            },
          ]"
          @focus="focusMail = true"
          @blur="focusMail = false"
          v-model.trim="mail"
        />
        <label for="mail">Email</label>
        <small v-if="$v.mail.$model && !$v.mail.email"
          >Неверный формат e-mail</small
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
                ($v.password.$model && !$v.password.minLength) || errorPassword,
            },
          ]"
          @input="errorPassword = false"
          @focus="focusPass = true"
          @blur="focusPass = false"
          v-model.trim="password"
        />
        <label for="password">Пароль</label>
        <small v-if="$v.password.$model && !$v.password.minLength"
          >Ваш пароль длиннее 5-ти символов</small
        >
         <small v-else-if="errorPassword" 
          >Пользователь с такой связкой e-mail и пароля не найден</small
        >
        
        <div class="ShowHide">
          <img
            v-if="show"
            v-on:click="show = !show"
            src="../assets/img/icons/hide.svg"
            class="invert_5"
            alt="hide"
          /><img
            v-if="!show"
            v-on:click="show = !show"
            src="../assets/img/icons/show.svg"
            class="invert_5"
            alt="show"
          />
        </div>
      </div>
      <button
        type="submit"
        class="form__comin"
        :class="{
          comin__disabled:
            ($v.mail.$model && !$v.mail.email) ||
            !$v.mail.$model ||
            !$v.password.$model ||
            ($v.password.$model && !$v.password.minLength),
        }"
      >
        Войти
      </button>
      <router-link to="/auth/reset" class="forgot_password"
        >Забыли пароль?</router-link
      >
      <div class="registration">
        Новый пользователь?
        <router-link to="/auth/registration">Зарегистрируетесь</router-link>
      </div>
    </div>
  </form>
</template>
<script>
import { email, required, minLength } from "vuelidate/lib/validators";

export default {
  name: "Login",
  data() {
    return {
      focusMail: false,
      focusPass: false,
      mail: "",
      password: "",
      show: false,
      errorPassword: false
    };
  },
  validations: {
    mail: { email, required },
    password: { minLength: minLength(6), required },
  },
  methods: {
    async submitHandler() {
      if (this.$v.$invalid) {
        this.$v.$touch();
        return;
      }

      const formData = {
        email: this.mail,
        password: this.password,
      };
      try {
        await this.$store.dispatch("login", formData);
        this.$router.push("/");
      } catch(e){
        this.errorPassword = true
      }
    },
  },
};
</script>
<style lang="sass" >
</style>