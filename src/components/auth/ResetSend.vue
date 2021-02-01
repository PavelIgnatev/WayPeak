<template >
  <div class="ResetSend">
    <form class="form">
      <div class="form__wrapper">
        <div class="form__text">Спасибо</div>
        <div class="form__send_text">
          Создайте новый пароль по ссылке в письме, которое мы отправили на
          <span>{{ email }}</span>
        </div>
        <div class="sendAgain" :class="{ inactive: tic }">
          <div
            class="sendAgain_send"
            :class="{ inactive: tic }"
            v-on:click="sendAgain"
          >
            Отправить повторно
          </div>
          <div class="sendAgain_time">
            через 00:{{ tic > 9 ? tic : "0" + tic }} (или напишите нам на
            hello@waypeak.ru)
          </div>
        </div>
        <div class="registration mt50px">
          У вас уже есть аккаунт?
          <router-link to="/auth/sign-in">Войти</router-link>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  metaInfo: {
    title: 'Восстановление'
  },
  name: "ResetSend",
  data() {
    return {
      email: "",
      tic: 30,
    };
  },
  mounted() {
    this.email = localStorage.resetemail;
    let d = setInterval(() => {
      if (this.tic > 0) {
        this.tic--;
      } else {
      }
    }, 1000);
  },
  methods: {
    async sendAgain() {
      const formData = {
        email: this.email,
      };
      try {
        await this.$store.dispatch("sendPasswordResetEmail", formData);
        this.tic = 30;
      } catch (e) {
        this.$router.push("/auth/reset");
      }
    },
  },
};
</script>
<style lang="sass">
</style>