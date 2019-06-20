<template>
  <b-field>
    <p class="control">
      <button class="button is-primary" :disabled="updating" @click="updateTable">
        <b-icon pack="fas" icon="sync" size="is-small"></b-icon>
      </button>
    </p>
    <b-input placeholder="path" v-model="valuePath"></b-input>
    <p class="control">
      <button class="button is-primary" @click="addPath()">
        <b-icon pack="fas" icon="plus-square" size="is-small" ></b-icon>
      </button>
    </p>
  </b-field>
</template>

<script>
import { mapState, mapGetter, mapActions } from "vuex";

export default {
  name: "QmanualAdd",
  data () {
    return {
      valuePath: null
    }
  },
  methods: {
    updateTable() {
      this.$store.commit("toggleUpdatingState", true);
      this.$store.dispatch("updateQueue").then(resp => {
      this.$store.commit("toggleUpdatingState", false);
      });
    },
    addPath() {
      this.$store.dispatch("addToQueue",  {path:this.valuePath}).then(resp => {
        this.$store.commit('toggleUpdatingState', true)
        this.$store.dispatch('updateQueue').then( resp => {
        this.$store.commit('toggleUpdatingState', false)
      })
      })
    }
  },
  computed: mapState({
    updating: state => state.updatingQueue,
  })
};
</script>

<style>
</style>
