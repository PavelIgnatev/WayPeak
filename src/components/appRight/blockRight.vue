<template >
  <div class="blockRight" v-if="$route.params.id">
    <HeaderRight
      v-if="$store.getters[to][id]"
      :data="$store.getters[to][id]['data']"
    ></HeaderRight>
    <div
      contenteditable
      v-if="this.$store.getters[to][id]"
      :key='$route.params.id'
      @input="debounceInput"
    >
      {{ $store.getters[to][id].text }}
    </div>

    <textarea
      contenteditable
      name="subtext"
      id="subtext"
      class="subtext"
      placeholder="Описание"
      v-if="this.$store.getters[to][id]"
      :value="$store.getters[to][id].description"
    ></textarea>
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
      main: "",
      filterKey: "",
      subtext: "",
    };
  },
  components: { HeaderRight, ItemData, FooterRight },
  computed: {
    to() {
      return this.paths[this.$route.path.split("/")[2]];
    },
    id() {
      return this.$route.params.id;
    },
  },
  methods: {
    debounceInput: _.debounce(function (e) {
      let formData = {
        id: this.id,
        text: e.target.innerText,
        data: this.$store.getters[this.to][this.id].data,
        description: ''
      }
      this.$store.dispatch('updateMess', formData)
    }, 500),
  },
};
</script>
<style lang="sass">
.blockRight
  border-left: 1px solid rgba(0,0,0,.15)
  height: 100vh
  position: relative
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