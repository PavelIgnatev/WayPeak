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
          v-model.trim="name"
          :class="[
            { input__focus: focusName || name },
            {
              invalid: $v.name.$dirty && !$v.name.required,
            },
          ]"
        />
        <label for="name">Имя</label>
      </div>
      <div class="form__sername">
        <input
          type="text"
          name="sername"
          id="sername"
          @focus="focusSername = true"
          @blur="focusSername = false"
          v-model.trim="Sername"
          :class="[
            { input__focus: focusSername || Sername },
            {
              invalid: $v.Sername.$dirty && !$v.Sername.required,
            },
          ]"
        />
        <label for="name">Фамилия</label>
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
                ($v.mail.$model && !$v.mail.email) ||
                emailError,
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
        <small v-if="emailError"
          >Данный e-mail уже занят другим пользователем</small
        >
      </div>
      <div class="form__password">
        <input
          :type="show ? 'text' : 'password'"
          name="passwordReg"
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
          v-model.trim="password"
        />
        <label for="password">Пароль</label>
        <small v-if="$v.password.$model && !$v.password.minLength"
          >Введите пароль длиннее 5-ти символов</small
        >
        <div class="ShowHide">
          <img
            v-if="show"
            v-on:click="show = !show"
            src="../../assets/img/icons/hide.svg"
            class="invert_5"
            alt="hide"
          /><img
            v-if="!show"
            v-on:click="show = !show"
            src="../../assets/img/icons/show.svg"
            class="invert_5"
            alt="show"
          />
        </div>
      </div>
      <div style="display: flex; position: relative">
        <input
          type="checkbox"
          name="b"
          id="check"
          value=""
          class="form__check"
          v-model.trim="checked"
        />
        <label
          for="check"
          class="form__checkbox"
          :class="{ form__checkbox_active: checked }"
          style="display: flex"
        ></label>
        <div class="form__checbox_text">
          Я согласен с условиями обработки
          <router-link class="form__checbox_link" to="/auth/registration"
            >персональных данных</router-link
          >
        </div>
      </div>
      <button
        class="form__comin"
        type="submit"
        :class="{
          comin__disabled:
            ($v.password.$model && !$v.password.minLength) ||
            ($v.mail.$model && !$v.mail.email) ||
            !$v.Sername.$model ||
            !$v.name.$model ||
            !$v.password.$model ||
            !$v.mail.$model ||
            !checked,
        }"
      >
        Зарегистрироваться
      </button>
      <div class="registration mt50px">
        У вас уже есть аккаунт?
        <router-link to="/auth/sign-in">Войти</router-link>
      </div>
    </div>
  </form>
</template>
<script>
import { email, required, minLength } from "vuelidate/lib/validators";
export default {
  metaInfo: {
    title: 'Регистрация'
  },
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
      emailError: false,
      checked: false,
    };
  },
  validations: {
    name: { required },
    Sername: { required },
    mail: { email, required },
    password: { minLength: minLength(6), required },
  },
  methods: {
    async submitHandler() {
      if (this.$v.$invalid) {
        this.$v.$touch();
        return;
      }
      let colors = ["#512da8"];
      const formData = {
        name: this.name,
        sername: this.Sername,
        email: this.mail,
        password: this.password,
        backgroundImg:
          colors[Math.round(Math.random(1) * (colors.length - 1) + 1) - 1],
      };
      try {
        await this.$store.dispatch("register", formData);
        this.$router.push("/app");
      } catch (e) {
        this.emailError = true;
      }
    },
  },
};
</script>
<style lang="sass">
.mt50px
  margin-top: 50px
  padding-bottom: 100px !important
.form
  &__checkbox
    top: 1px
.form__checbox_text
  margin-left: 22px

</style>