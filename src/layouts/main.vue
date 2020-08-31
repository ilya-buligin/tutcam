ga<template>
  <header class="header" :class="{ 'header--with-sidebar': isSidebarVisible }">
    <IconBtn
      icon="menu"
      tabindex="1"
      @click="isSidebarVisible = !isSidebarVisible"
    />
    <h1 v-if="title" class="header__title">{{ title }}</h1>
  </header>
  <main class="main" :class="{ 'main--with-sidebar': isSidebarVisible }">
    <slot />
  </main>
  <transition name="fade">
    <div
      v-if="isSidebarVisible"
      class="overlay"
      @click="isSidebarVisible = false"
    ></div>
  </transition>
  <div class="sidebar" :class="{ 'sidebar--visible': isSidebarVisible }">
    <IconBtn
      class="sidebar__close-btn"
      icon="close"
      @click="isSidebarVisible = false"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

import IconBtn from '@/components/icon-btn.vue';

export default defineComponent({
  name: 'MainLayout',
  components: {
    IconBtn
  },
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  setup() {
    const isSidebarVisible = ref(false);

    return {
      isSidebarVisible
    };
  }
});
</script>

<style lang="scss">
.sidebar {
  position: fixed;
  width: var(--sidebar-width);
  height: 100vh;
  top: 0;
  left: 0;
  background-color: var(--sidebar-bg);
  transform: translateX(calc(0px - var(--sidebar-width)));
  transition: transform 0.3s;
  z-index: 2;
}
.sidebar--visible {
  transform: translateX(0);
}

.sidebar__close-btn {
  display: none;
  margin: 8px 16px;
}

.header {
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

  .header__title {
    font-size: 20px;
    margin-left: 20px;
  }
}

.main {
  padding: 24px;
}

.header,
.main {
  transition: margin-left 0.3s;
}
.header--with-sidebar,
.main--with-sidebar {
  margin-left: var(--sidebar-width);
}

.overlay {
  display: none;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
}

@media (max-width: 768px) {
  .header--with-sidebar,
  .main--with-sidebar {
    margin-left: 0;
  }
  .overlay {
    display: block;
  }
  .sidebar__close-btn {
    display: block;
  }
}

@media (max-width: 320px) {
  .sidebar {
    --sidebar-width: 320px;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
