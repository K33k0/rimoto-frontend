<template>
  <nav class="navbar" role="navigation">
    <div class="navbar-brand">
      <a
        role="button"
        class="navbar-burger"
        :class="{'is-active': active}"
        @click="toggleMainNav"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div class="navbar-menu" :class="{'is-active': active}">
      <div class="navbar-start">
        <router-link class="navbar-item" to="/">Home</router-link>
      </div>
      <div class="navbar-end"></div>
    </div>
  </nav>
</template>

<script>

export default {
  data: () => ({
    active: false
  }),
  methods: {
    toggleMainNav: function() {
      this.active = !this.active
    }
  }
};
</script>
