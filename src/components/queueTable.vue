<template>
  <b-table :data="isEmpty ? [] : info" :loading="isLoading">
    <template slot-scope="props">
      <b-table-column field="delete" label="Remove">
        <b-button class="is-success" @click="manualScan">Scan Now</b-button>
      </b-table-column>
      <b-table-column field="id" label="ID">{{ props.row.id }}</b-table-column>
      <b-table-column field="path" label="Path">
        <b-tooltip :label="props.row.remote_path">{{ props.row.path }}</b-tooltip>
      </b-table-column>
      <b-table-column field="library_name" label="Library">
        <b-tooltip :label="props.row.library_id | toString">{{ props.row.library_name }}</b-tooltip>
      </b-table-column>
      <b-table-column
        field="downloaded_at"
        label="Download Time"
      >{{ props.row.downloaded_at | formatDate }}</b-table-column>
      <b-table-column field="delete" label="Remove">
        <b-button class="is-danger" @click="deleteFromQueue">Remove</b-button>
      </b-table-column>
    </template>
    <template slot="empty">
      <section class="section">
        <div class="content has-text-grey has-text-centered">
          <p>
            <b-icon icon="emoticon-sad" size="is-large"></b-icon>
          </p>
          <p>Nothing here.</p>
        </div>
      </section>
    </template>
  </b-table>
</template>

<script>
import moment from "moment";

export default {
  name: "co-queue-table",
  data() {
    return {
      info: [],
      isLoading: false,
      isEmpty: false
    };
  },
  methods: {
    deleteFromQueue(event) {
      const selectedRow =
        event.target.parentNode.parentNode.parentNode.parentNode;
      const path = selectedRow.children[2].innerText;
      this.$axios
        .post("http://127.0.0.1:8000/delete", { file_path: path })
        .then(
          response =>
            (this.info = this.info.filter(function(obj) {
              return obj.path !== path;
            }))
        );
    },
    manualScan(event) {
      let row = event.target.parentNode.parentNode.parentNode.parentNode;
      let section_id = row.children[3].firstChild.firstChild.dataset.label;
      let path = row.children[2].innerText;
      let id = row.children[1].innerText;
      console.log(section_id);
      axios
        .post("http://127.0.0.1:8000/manualscan", {
          path: path,
          section_id: section_id,
          record_id: id
        })
        .then(response => this.getQueue());
    }
  },
  filters: {
    formatDate: function(value) {
      if (!value) return;
      return moment(String(value)).format("YYYY/MM/DD HH:mm");
    },
    toString: function(value) {
      if (!value) return;
      return value.toString();
    },
  },
};
</script>
