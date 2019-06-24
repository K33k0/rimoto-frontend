<template>
  <b-table :data="isEmpty ? [] : this.$store.getters.queue">
    <template slot-scope="props">
      <b-table-column field="scan" label="Scan">
        <b-button class="is-success" @click="scanNow" :id="props.row.id">Scan</b-button>
      </b-table-column>
      <b-table-column field="id" label="ID">{{ props.row.id }}</b-table-column>
      <b-table-column field="path" label="Path">{{ props.row.path }}</b-table-column>
      <b-table-column field="library_name" label="Library">{{ props.row.library_name }}</b-table-column>
      <b-table-column
        field="downloaded_at"
        label="Downloaded At"
      >{{ props.row.downloaded_at | parseDT }}</b-table-column>
      <b-table-column field="delete" label="Delete">
        <b-button class="is-danger" @click="deleteNow(props.row.path)">Delete</b-button>
      </b-table-column>
    </template>
    <template slot="empty">
      <section class="section">
        <div class="content has-text-grey has-text-centered">
          <p>
            <b-icon pack="far" icon="smile" size="is-large"></b-icon>
          </p>
          <p>Nothing here.</p>
        </div>
      </section>
    </template>
  </b-table>
</template>

<script>
import { mapState, mapGetter, mapActions } from "vuex";
import moment from 'moment'

export default {
  name: "QTable",
  data: () => ({
    isEmpty: null
  }),
  methods: {
    scanNow: () => {},
    updateTable() {
      this.$store.commit("toggleUpdatingState", true);
      this.$store.dispatch("updateQueue").then(resp => {
        this.$store.commit("toggleUpdatingState", false);
      });
    },
    deleteNow(path) {
      this.$store.dispatch("deleteFromQueue", { path: path }).then(resp => {
        this.$snackbar.open(`${path} Deleted from queue`);
        this.updateTable();
      });
    },
  },
  filters:{
    parseDT(value) {
      return moment(value).format('YYYY-MM-DD hh:mm:ss')
    }
  },
  timers: {
    updateTable: {
      time: 30000,
      autostart: true,
      repeat: true,
      immediate: false
    }
  }
};
</script>

<style>
</style>
