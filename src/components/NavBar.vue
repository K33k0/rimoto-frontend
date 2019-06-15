<template>
  <nav class="navbar" role="navigation">
    <div class="navbar-brand">
      <a
        role="button"
        class="navbar-burger"
        :class="{'is-active': $store.getters.mainNavVis}"
        @click="toggleMainNav"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div class="navbar-menu" :class="{'is-active': $store.getters.mainNavVis}">
      <div class="navbar-start">
        <router-link class="navbar-item" to="/">Home</router-link>
      </div>
      <div class="navbar-end"></div>
    </div>
  </nav>
</template>

<script>

export default {
  methods: {
    toggleMainNav: function() {
      this.$store.dispatch('toggleMainNavVis')
    }
  }
};
</script>
