<template>
  <button class="icon-btn" v-ripple>
    <Icon :name="icon" />
  </button>
</template>

<script>
import Icon from '@/components/icon.vue';
export default {
  components: {
    Icon
  },
  props: {
    icon: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss">
.icon-btn {
  --scale-factor: 2;
  --icon-size: 24px;

  width: calc(1em * var(--scale-factor));
  height: calc(1em * var(--scale-factor));
  padding: calc(1em / var(--scale-factor));
  line-height: 1;
  font-size: var(--icon-size);
  color: inherit;
  border: none;
  background-color: transparent;
  cursor: pointer;
  border-radius: 50%;
  transition: background-color 0.2s;

  &:hover,
  &:focus {
    background-color: rgba(0, 0, 0, 0.2);
    outline: none;
  }

  span {
    color: inherit;
  }
}
</style>
