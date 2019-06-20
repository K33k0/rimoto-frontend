<template>
  <div class="container">
    <Q-Manual-Add/>
    <Q-Table/>
  </div>
</template>

<script>
  import QTable from '@/components/QTable.vue';
  import QManualAdd from '@/components/QmanualAdd.vue';

export default {
  components: {
    QTable,
    QManualAdd
  }
}
</script>
