<template>
  <div class="container">
    <k-tools></k-tools>
    <!-- <k-table></k-table> -->
  </div>
</template>

<script>
// import queueTable from '@/components/queueTable.vue';
import manualTools from '@/components/manualToolbar.vue';

export default {
  name: 'queue',
  methods: {
    getQueue: () => {
      // this.$store.dispatch('getQueue');
    },
  },
  components: {
    // 'k-table': queueTable,
    'k-tools': manualTools,
  },
};
</script>
