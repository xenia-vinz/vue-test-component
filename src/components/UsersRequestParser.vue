<template>
  <UsersList
    v-if="!loadingFailed"
    :users="users" />
</template>

<script>
import UsersList from './UsersList.vue';

export default {
  name: 'UsersRequestParser',
  components: {
    UsersList,
  },
  props: {
    url: String,
  },
  data() {
    return {
      users: null,
      loaded: false,
      loadingFailed: false,
    };
  },
  computed: {
    type() {
      return this.url ? this.url.split('.').pop().toLowerCase() : null;
    },
  },
  mounted() {
    this.loadUsers();
  },
  methods: {
    loadUsers() {
      switch (this.type) {
        case 'json':
          this.loadUsersJSON();
          break;
        case 'csv':
          this.loadUsersCSV();
          break;
        default:
          this.$set(this, 'users', null);
          this.$set(this, 'loadingFailed', true);
          break;
      }
    },
    loadUsersJSON() {
      this.$superagent
        .get(this.url)
        .then((response) => {
          const responseBody = response.body || {};

          if (response.ok) {
            this.$set(this, 'users', responseBody);
            this.$set(this, 'loadingFailed', false);
          } else {
            this.$set(this, 'users', null);
            this.$set(this, 'loadingFailed', true);
          }
        })
        .catch((err) => {
          console.error(err);
        });
    },
    loadUsersCSV() {
      this.$papa.parse(this.url, {
        download: true,
        header: true,
        complete: (result) => {
          if (Array.isArray(result.data)) {
            this.$set(this, 'users', result.data);
            this.$set(this, 'loadingFailed', false);
          } else {
            this.$set(this, 'users', null);
            this.$set(this, 'loadingFailed', true);
          }
        },
      });
    },
  },
};
</script>

<style scoped lang="scss">
</style>
