<template>
  <b-field>
    <p class="control">
      <button class="button is-info" @click="manualUpdate">
        <b-icon pack="fas" icon="sync-alt"></b-icon>
      </button>
    </p>
    <b-input placeholder="Remote path"></b-input>
    <p class="control">
      <button class="button is-success">
        <b-icon pack="fas" icon="plus"></b-icon>
      </button>
    </p>
  </b-field>
</template>

<script>
export default {
  name: 'manualTools',
  methods: {
    manualUpdate: () => {
      const getQueue = 'https://127.0.0.1:8000/queue'
      // this.$axios.get(getQueue).then(res =>)
    },
  },
};
</script>
