<template>
  <div class="container">
    <b-button @click="getQueue">Fetch</b-button>
    <k-table></k-table>
  </div>
</template>

<script>
import queueTable from '@/components/queueTable.vue';

export default {
  name: 'queue',
  methods: {
    getQueue: () => {
      this.$store.dispatch('getQueue');
    },
  },
  components: {
    'k-table': queueTable,
  },
};
</script>
