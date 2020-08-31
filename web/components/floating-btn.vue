<template>
  <button class="floating-btn" v-ripple>
    <Icon :name="icon" />
  </button>
</template>

<script>
import Icon from '@/components/icon.vue';
export default {
  name: 'FloatingBtn',
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
.floating-btn {
  --btn-size: 56px;
  --icon-size: 26px;
  --btn-color: var(--primary-color);

  display: flex;
  align-items: center;
  justify-content: center;
  width: var(--btn-size);
  height: var(--btn-size);
  color: inherit;
  border: none;
  background-color: var(--btn-color);
  cursor: pointer;
  border-radius: 50%;
  box-shadow: 0 3px 6px -1px rgba(0, 0, 0, 0.2),
    0 6px 10px 0 rgba(0, 0, 0, 0.15), 0 1px 17px 0 rgba(0, 0, 0, 0.13);

  &::before {
    content: ' ';
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(#fff, 0.2);
    opacity: 0;
    transition: opacity 0.2s;
  }

  &:hover,
  &:focus {
    &::before {
      opacity: 1;
    }
    outline: none;
  }

  span {
    color: inherit;
    font-size: var(--icon-size);
  }
}
</style>
