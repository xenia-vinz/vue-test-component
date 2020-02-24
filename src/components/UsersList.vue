<template>
  <section
    :class="wrapperClass"
    class="users"
    role="list">

    <User
      v-for="item in users"
      v-bind:key="item.guid"
      :data="item"
    ></User>

  </section>
</template>

<script>
import User from './User.vue';

export default {
  name: 'UsersList',
  components: {
    User,
  },
  props: {
    users: Array,
  },
  computed: {
    wrapperClass() {
      const classes = [];

      if (Array.isArray(this.users) && this.users.length) {
        classes.push('visible');
      }
      return classes;
    },
  },
};
</script>

<style scoped lang="scss">
  .users {
    border: 1px solid #216869;
    border-radius: 10px;
    opacity: 0;
    visibility: hidden;
    transition: opacity .2s linear;
    transition-delay: 1s;
    &.visible {
      opacity: 1;
      visibility: visible;
    }
  }
</style>
