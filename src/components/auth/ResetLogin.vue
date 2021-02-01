<template >
  <form class="form" @submit.prevent="submitHandler">
    <div class="form__wrapper">
      <div class="form__text">Восстановление пароля</div>
      <div class="form__mail">
        <input
          type="mail"
          name="mail"
          id="mail"
          @input="
            mailError = false;
            mailErrorNot = false;
          "
          :class="[
            { input__focus: focusMail || mail },
            {
              invalid:
                ($v.mail.$dirty && !$v.mail.required) ||
                ($v.mail.$model && !$v.mail.email) ||
                mailError ||
                mailErrorNot,
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
        <small v-if="mailError">Слишком много попыток, попробуйте позже</small>
        <small v-if="mailErrorNot">Пользователь с таким e-mail не найден</small>
      </div>
      <div class="form__subheader">
        На ваш e-mail будут отправлены инструкции для восстановления пароля.
      </div>
      <button
        class="form__comin mt130px"
        :class="{
          comin__disabled:
            !$v.mail.$model || ($v.mail.$model && !$v.mail.email),
        }"
      >
        Отправить письмо
      </button>
      <div class="registration mt100px">
        У вас уже есть аккаунт?
        <router-link to="/auth/sign-in">Войти</router-link>
      </div>
    </div>
  </form>
</template>
<script>
import { email, required } from "vuelidate/lib/validators";
export default {
  name: "Resetlogin",
  metaInfo: {
    title: 'Восстановление'
  },
  data() {
    return {
      focusMail: false,
      mail: "",
      mailError: false,
      mailErrorNot: false,
    };
  },
  validations: { mail: { email, required } },
  methods: {
    async submitHandler() {
      if (this.$v.$invalid) {
        this.$v.$touch();
        return;
      }
      const formData = {
        email: this.mail,
      };
      try {
        localStorage.resetemail = this.mail;
        await this.$store.dispatch("sendPasswordResetEmail", formData);
        this.$router.push("/auth/reset-success/");
      } catch (e) {
        const d = e.code.split("/") [1];
        if (d == "too-many-requests") {
          this.mailError = true;
        } else {
          if (d == "user-not-found") {
            this.mailErrorNot = true;
          }
        }

      }
    },
  },
};
</script>
<style lang="sass">
.mt130px
  margin-top: 130px
.mt100px
  margin-top: 100px
</style>