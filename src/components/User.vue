<template>
  <article
    v-if="fullName"
    class="user"
    role="listitem">

    <div class="user-picture">
      <img
        class="user-picture__image"
        :src="avatarSrc"
        @load="handleAvatarLoadComplete"
        @error="handleAvatarLoadError"
        :alt="avatarDescription"
        :title="fullName"
      />
    </div>

    <div class="user-data">
      <div class="user-data__row">
        <Icon
          v-if="data.gender"
          :type="`gender-${data.gender}`"
          extraClass="user-data__row-icon"
        ></Icon>
        <div class="user-title">
          {{ fullName }}
        </div>
      </div>
      <div
        v-if="data.email"
        class="user-data__row">
          <Icon
            v-if="data.email"
            type="email"
            extraClass="user-data__row-icon"
          ></Icon>
          <a
            :href="`mailto:${data.email}`"
            class="user-email">{{ data.email }}</a>
      </div>
      <div
        v-if="data.address"
        class="user-data__row">
          <Icon
            v-if="data.address"
            type="address"
            extraClass="user-data__row-icon"
          ></Icon>
          <address
            class="user-address"
            v-html="data.address">
          </address>
      </div>
    </div>

  </article>
</template>

<script>
import Icon from './Icon.vue';

export default {
  name: 'user',
  components: {
    Icon,
  },
  props: {
    data: Object,
  },
  data() {
    return {
      avatarLoaded: false,
      hasAvatar: true,
      defaultAvatar: {
        src: '/user.svg',
        description: 'No user photo available',
      },
    };
  },
  computed: {
    avatarSrc: {
      get() {
        let src = Object.prototype.hasOwnProperty.call(this.defaultAvatar, 'src') ? this.defaultAvatar.src : '';

        if (this.data) {
          if (Object.prototype.hasOwnProperty.call(this.data, 'picture') && this.avatarLoaded && this.hasAvatar) {
            src = this.data.picture;
          }
        }
        return src;
      },
      set(value) {
        return value;
      },
    },
    avatarDescription: {
      get() {
        return (this.avatarLoaded && this.hasAvatar) ? `Photo of ${this.fullName}` : this.defaultAvatar.description;
      },
    },
    fullName() {
      let result = null;

      if (this.data) {
        result = [];
        if (this.data.title) {
          result.push(this.capitalize(this.data.title));
        }
        if (this.data.firstname) {
          result.push(this.capitalize(this.data.firstname));
        }
        if (this.data.lastname) {
          result.push(this.capitalize(this.data.lastname));
        }
        result = result.join(' ');
      }

      return result;
    },
  },
  methods: {
    capitalize(value) {
      let capitalized;

      if (!value) {
        capitalized = '';
      } else {
        capitalized = value.toString();
        capitalized = capitalized.charAt(0).toUpperCase() + capitalized.slice(1);
      }

      return capitalized;
    },
    handleAvatarLoadComplete() {
      this.$set(this, 'avatarLoaded', true);
    },
    handleAvatarLoadError() {
      this.$set(this, 'hasAvatar', false);
    },
  },
};
</script>

<style scoped lang="scss">
  .user {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 18px;
  }
    .user-picture {
      flex-basis: 200px;
      display: flex;
      justify-content: center;
      align-items: center;
      &__image {
        max-width: 100px;
      }
    }
    .user-data {
      &__row {
        display: flex;
        justify-content: flex-start;
        align-items: flex-end;
        margin: 10px 0 0;
        &:first-child {
          margin-top: 0;
        }
      }
        &__row-icon {
          display: block;
          margin: 0 5px 0 0;
        }
    }
      .user-title {
        border-bottom: 5px solid #dce1de;
      }
      .user-email {
        &,
        &:link,
        &:visited {
          color: #216869;
        }
        &:hover,
        &:active,
        &:focus {
          color: #49a078;
        }
        &:hover {
          text-decoration: none;
        }
        &:focus {
          background: #dce1de;
          color: #1f2421;
        }
      }
      .user-address {
      }
</style>
