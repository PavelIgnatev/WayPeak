<template >
  <div class="blockRight" v-if="$route.params.id">
    <HeaderRight
      v-if="$store.getters[to][id]"
      :data="$store.getters[to][id]['data']"
    ></HeaderRight>
    <div
      contenteditable="true"
      v-if="this.$store.getters[to][id]"
      :key="$route.params.id"
      @input="debounceName"
      class="blockRight__name"
      ref="name"
    ></div>
    <div
      contenteditable
      v-if="this.$store.getters[to][id]"
      :key="$route.params.id + $route.params.id"
      @input="debounceDescription"
      class="blockRight__description"
      ref="description"
    ></div>
    <FooterRight></FooterRight>
  </div>
  <div class="blockRightNone" v-else-if="id">
    {{ id }}
  </div>
</template>
<script>
import _ from "lodash";
import FooterRight from "./footerRight/footerRight";
import HeaderRight from "../headers/headerRight/headerRight";
import ItemData from "../Item/ItemData";
export default {
  name: "blockRight",
  data() {
    return {
      paths: {
        all: "returnInboxPost",
        inbox: "returnInboxPost",
        completed: "returnPerformedPost",
        trash: "returnTrashPost",
      },

      subtext: "",
    };
  },
  components: { HeaderRight, ItemData, FooterRight },
  updated() {
    if (this.$store.getters[this.to][this.id]) {
      if (this.$refs.name.innerText == "") {
        this.$refs.name.innerText = this.$store.getters[this.to][this.id].text;
      }
      if (this.$refs.description.innerText == "") {
        this.$refs.description.innerText = this.$store.getters[this.to][
          this.id
        ].description ? this.$store.getters[this.to][
          this.id
        ].description : 'Отредактируйте описание задачи';
      }
    }
  },
  computed: {
    to() {
      return this.paths[this.$route.path.split("/")[2]];
    },
    id() {
      return this.$route.params.id;
    },
  },
  methods: {
    debounceName: _.debounce(function (e) {
      let formData = {
        id: this.id,
        text: e.target.innerText.trim(),
      };
      this.$store.dispatch("updateMess", formData);
    }, 500),
    debounceDescription: _.debounce(function (e) {
      let formData = {
        id: this.id,
        description: e.target.innerText.trim(),
      };
      this.$store.dispatch("updateMess", formData);
    }, 500),
  },
};
</script>
<style lang="sass">
.blockRight
  border-left: 1px solid rgba(0,0,0,.15)
  height: 100vh
  color: rgba(0,0,0,.85)
  position: relative
  &__name
    line-height: 24px
    font-size: 16px
    font-weight: 700
    &::selection
      padding: 5px 0
      background: #bad7fb

  &__description
    line-height: 23px
    font-size: 16px
    &::selection
      background: #bad7fb

.subtext
  display: block
  margin-top: 20px
  width: 280px
  resize: none
  height: 40vh
  &::placeholder
    font-size: 14px
    color: #909090
.main
  display: block
  height: 7vh
  vertical-align: baseline
  &::placeholder
    font-size: 14px
    color: #909090
</style>