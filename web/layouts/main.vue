<template>
  <AppBar
    v-bind="{ title }"
    :class="{ 'appbar--with-sidebar': isSidebarVisible }"
    @icon-click="isSidebarVisible = !isSidebarVisible"
  />
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
    <nav>
      <ul>
        <li><router-link to="/">Your Places</router-link></li>
      </ul>
    </nav>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

import IconBtn from '@/components/icon-btn.vue';
import AppBar from '@/components/appbar.vue';

export default defineComponent({
  name: 'MainLayout',
  components: {
    IconBtn,
    AppBar
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

.main {
  padding: 24px;
}

.appbar,
.main {
  transition: margin-left 0.3s;
}
.appbar--with-sidebar,
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
  .appbar--with-sidebar,
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

@media (max-width: 426px) {
  .sidebar {
    --sidebar-width: 426px;
  }

  .main {
    padding: 18px;
  }
}
</style>
