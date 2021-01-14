<template >
  <form class="form" @submit.prevent="submitHandler">
    <div class="form__wrapper">
      <div class="form__text">Восстановление пароля</div>
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
          v-model="mail"
        />
        <label for="mail">Email</label>
        <small v-if="$v.mail.$model && !$v.mail.email"
          >Неверный формат e-mail</small
        >
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
  data() {
    return {
      focusMail: false,
      mail: "",
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
        await this.$store.dispatch("resetLogin", formData);
        this.$router.push("/");
      } catch (e) {console.log(e)}
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