<template>
  <header class="appbar">
    <IconBtn v-bind="{ icon }" @click="$emit('icon-click')" />
    <h1 v-if="title" class="appbar__title">{{ title }}</h1>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import IconBtn from '@/components/icon-btn.vue';

export default defineComponent({
  name: 'AppBar',
  components: {
    IconBtn
  },
  props: {
    icon: {
      type: String,
      default: 'menu'
    },
    title: {
      type: String,
      default: ''
    }
  }
});
</script>

<style lang="scss">
.appbar {
  position: sticky;
  display: flex;
  align-items: center;
  top: 0;
  height: 64px;
  padding: 4px 16px;
  background: var(--header-bg);
  color: var(--header-color);
  box-shadow: 0px 4px 7px 0px rgba(0, 0, 0, 0.3);
  z-index: 2;

  .appbar__title {
    font-size: 20px;
    margin-left: 20px;
    font-weight: 500;
  }
}
</style>
