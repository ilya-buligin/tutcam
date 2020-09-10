<template>
  <AppBar
    v-if="isInSelectionMode"
    class="gallery__appbar"
    :title="`${selectedCount} selected`"
    icon="close"
    @icon-click="clearSelection"
  />
  <Layout title="Your places">
    <span class="secondary-text">0 places</span>
    <ul class="gallery__cards">
      <Card
        v-for="i in 10"
        :key="i"
        :selected="selected[i]"
        @select="select(i)"
        @link-click="onCardLinkClick($event, i)"
      />
    </ul>
  </Layout>
  <CameraBtn />
</template>

<script lang="ts">
import { defineComponent, reactive, computed } from 'vue';

import Layout from '@/layouts/main.vue';
import AppBar from '@/components/appbar.vue';

import Card from './card.vue';
import CameraBtn from './camera-btn.vue';

export default defineComponent({
  name: 'GalleryView',
  components: { Layout, Card, AppBar, CameraBtn },
  setup() {
    const selected = reactive<{ [id: string]: boolean }>({});
    const selectedCount = computed(
      () => Object.entries(selected).filter(([, v]) => v).length
    );
    const isInSelectionMode = computed(() => selectedCount.value > 0);

    const select = (id: string) => {
      if (selected[id]) {
        selected[id] = false;
      } else {
        selected[id] = true;
      }
    };

    const clearSelection = () => {
      Object.entries(selected).forEach(([k]) => (selected[k] = false));
    };

    const onCardLinkClick = async (e: Event, id: string) => {
      if (isInSelectionMode.value) {
        select(id);
        (document.activeElement as HTMLElement).blur();
      } else {
        // router.push
      }
    };

    return {
      selected,
      select,
      selectedCount,
      clearSelection,
      onCardLinkClick,
      isInSelectionMode
    };
  }
});
</script>

<style lang="scss">
.gallery__cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  grid-gap: 12px;
  margin: 24px 0;
  padding: 0;
}

.gallery__appbar {
  position: fixed;
  width: 100%;
  z-index: 3;
  box-shadow: none;
}
</style>
