<template>
  <div id="app">
    <UsersRequestParser url="/api/testtakers.json" />
  </div>
</template>

<script>
import UsersRequestParser from './components/UsersRequestParser.vue';

export default {
  name: 'App',
  components: {
    UsersRequestParser,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #1F2421;
}
</style>
