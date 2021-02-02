<template >
  <div class="Tab">
    <div class="appHeaderTabs">
      <div
        class="appHeaderTabs__tab"
        :class="{ activeTab: active }"
        @click="active = true"
      >
        Списки
      </div>
      <div
        class="appHeaderTabs__tab"
        :class="{ activeTab: !active }"
        @click="active = false"
      >
        Метки
      </div>
    </div>
    <AppHeaderItem
      title="Создать список"
      classImg="invert_7"
      style="margin: 10px 0"
      src="assets/img/icons/add.svg"
      to=""
      v-if="active"
    ></AppHeaderItem>
    <AppHeaderItem
      title="Создать метки"
      classImg="invert_7"
      style="margin: 10px 0"
      src="assets/img/icons/add.svg"
      to=""
      v-if="!active"
    ></AppHeaderItem>
  </div>
</template>
<script>
import AppHeaderItem from "./AppHeaderItem";
export default {
  name: "appHeaderTabs",
  data() {
    return {
      active: true,
    };
  },
  components: {
    AppHeaderItem,
  },
};
</script>
<style lang="sass">
@import '@/assets/sass/_variables'
.appHeaderTabs
  width: 100%
  margin-top: 10px
  display: flex
.appHeaderTabs > div
  cursor: pointer
  width: 50%
  text-align: center
  font-size: 14px
  color: rgba(0, 0, 0, 0.36)
  transition: 0.2s ease-in-out
  border-bottom: 1px solid rgba(0,0,0,.1)
.activeTab
  font-weight: 600
  font-size: 13.5px !important
  color: #2c2727 !important
  border-bottom: 1px solid #2c2727 !important
</style>