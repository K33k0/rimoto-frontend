<template>
    <b-table :data="isEmpty ? [] : recentScanned">
    <template slot-scope="props">
      <b-table-column field="path" label="Path">{{ props.row.path }}</b-table-column>
      <b-table-column
        field="downloaded_at"
        label="Downloaded At"
      >{{ props.row.downloaded_at | parseDT }}</b-table-column>
            <b-table-column
        field="scanned_at"
        label="Scanned At"
      >{{ props.row.scanned_at | parseDT }}</b-table-column>
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
  data () {
    return {
      isEmpty: null
    }
  },
  computed: mapState({
    recentScanned: state => state.recentScanned
  }),
  methods:{
    updateTable(){
      this.$store.commit("updateRecentScanned");
    }
  },
  filters:{
    parseDT(value) {
      return moment(value).format('YYYY-MM-DD hh:mm:ss')
    }
  },
  timers: {
    updateTable: {
      time: 5000,
      autostart: true,
      repeat: true,
      immediate: true
    }
  }
}
</script>

<style>

</style>
