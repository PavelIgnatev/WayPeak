<template >
  <header class="appHeader">
    <div class="appHeader__header">
      <div
        class="appHeader__header__icon"
        :style="`background: ${backgroundImg}`"
      >
        <p>{{ name ? name.split("")[0] : "" }}</p>
      </div>
      <div class="appHeader__header__nameandsername">
        {{ name }} {{ sername }}
      </div>
      <div class="appHeader__header__search">
        <img
          src="@/assets/img/icons/search.svg"
          alt="search"
          class="invert_6"
        />
      </div>
      <div class="appHeader__header__bell">
        <img src="@/assets/img/icons/bell.svg" alt="bell" class="invert_6" />
      </div>
    </div>
    <div class="appHeader__wrapper">
      <div class="appHeaderItem">
        <AppHeaderItem
          title="Все"
          src="assets/img/icons/grid.svg"
          classImg="invert_7"
          :active="$route.path.includes('/app/all') ? true : false"
          to="/app/all"
        ></AppHeaderItem>
        <AppHeaderItem
          title="Входящие"
          src="assets/img/icons/inbox.svg"
          classImg="invert_7"
          :active="$route.path.includes('/app/inbox') ? true : false"
          to="/app/inbox"
        ></AppHeaderItem>
        <AppHeaderItem
          title="Сегодня"
          classImg="invert_7"
          src="assets/img/icons/today.svg"
          :active="$route.path.includes('/app/today') ? true : false"
          to="/app/today"
        ></AppHeaderItem>
        <AppHeaderItem
          title="Завтра"
          classImg="invert_7"
          src="assets/img/icons/today.svg"
          :active="$route.path.includes('/app/tomorrow') ? true : false"
          to="/app/tomorrow"
        ></AppHeaderItem>
        <AppHeaderItem
          title="Следующая неделя"
          classImg="invert_7"
          src="assets/img/icons/week.svg"
          :active="$route.path.includes('/app/week') ? true : false"
          to="/app/week"
        ></AppHeaderItem>
        <AppHeaderTabs></AppHeaderTabs>
        <div class="line"></div>
        <AppHeaderItem
          title="Выполнено"
          classImg="invert_7"
          src="assets/img/icons/check.svg"
          :active="$route.path.includes('/app/completed') ? true : false"
          to="/app/completed"
        ></AppHeaderItem>
        <AppHeaderItem
          title="Корзина"
          classImg="invert_7"
          src="assets/img/icons/delete.svg"
          :active="$route.path.includes('/app/trash') ? true : false"
          to="/app/trash"
        ></AppHeaderItem>
      </div>
    </div>
  </header>
</template>
<script>
import AppHeaderItem from "./AppHeaderItem";
import AppHeaderTabs from "./AppHeaderTabs";
export default {
  name: "AppHeader",
  async mounted() {
    if (!Object.keys(this.$store.getters.info).length) {
      await this.$store.dispatch("fetchInfo");
    }
  },
  computed: {
    name() {
      return this.$store.getters.info.name;
    },
    sername() {
      return this.$store.getters.info.sername;
    },
    backgroundImg() {
      return this.$store.getters.info.backgroundImg;
    },
  },
  data() {
    return {
      inputActive: false,
      item: 5,
    };
  },
  components: {
    AppHeaderItem,
    AppHeaderTabs
  },
};
</script>
<style lang="sass">
@import '@/assets/sass/_variables'
.appHeader
  color: $black
  width: 260px
  height: 100vh
  box-sizing: border-box
  border-right: 1px solid rgba(0,0,0,.15)
  &__header
    height: 64px
    width: 230px
    display: flex
    align-items: center
    margin: 0 auto
    &__search
      margin-right: 15px
    &__icon
      cursor: pointer
      display: block
      font-size: 15px
      line-height: 15px
      color: white
      width: 28px
      height: 28px
      display: flex
      justify-content: center
      align-items: center
      border-radius: 50%
      margin-left: 3px
    img
      display: block
      width: 17px
      cursor: pointer
      &:hover
        filter: invert(0.4)
    &__nameandsername
      margin-left: 8px
      white-space: nowrap
      overflow: hidden
      text-overflow: ellipsis
      width: 105px
      font-size: 14px
      margin-top: 3px
      color: $black
      margin-right: 30px
  &__wrapper
    display: flex
    justify-content: center
    overflow: auto
    width: 100%
    height: calc(100vh - 64px)
  .activeItem
    background-color: rgba(75,111,222,.2)
    font-weight: 700
    font-size: 13.5px
  .line
    margin: 5px 0
    border-bottom: 1px solid rgba(0,0,0,.1)
</style>