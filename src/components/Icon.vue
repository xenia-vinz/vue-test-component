<template>
  <span
    :class="iconClass"
  ></span>
</template>

<script>
export default {
  name: 'Icon',
  props: {
    type: String,
    extraClass: String,
  },
  computed: {
    iconClass: {
      get() {
        const type = this.type ? this.type.replace(/\s/g, '') : null;
        const classes = ['icon'];

        if (type) {
          classes.push(`icon--${type}`);
        }
        if (this.extraClass && this.extraClass !== this.type) {
          classes.push(this.extraClass);
        }
        return classes;
      },
    },
  },
};
</script>

<style scoped lang="scss">
  .icon {
    display: inline-block;
    vertical-align: middle;
    width: 20px;
    height: 20px;
    background-position: center center;
    background-repeat: no-repeat;
    background-color: transparent;
    background-size: contain;

    &--gender-female {
      background-image: url('../assets/gender-female.svg');
    }
    &--gender-male {
      background-image: url('../assets/gender-female.svg');
    }
    &--email {
      background-image: url('../assets/email.svg');
    }
    &--address {
      background-image: url('../assets/address.svg');
    }
  }
</style>
