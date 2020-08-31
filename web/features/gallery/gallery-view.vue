<template>
  <Layout title="Your places">
    <span class="secondary-text">{{ selectedCount }} places</span>
    <ul class="gallery__cards">
      <Card
        v-for="i in 10"
        :key="i"
        :selected="selected[i]"
        @select="onSelect(i)"
      />
    </ul>
  </Layout>
</template>

<script lang="ts">
import { defineComponent, reactive, computed } from 'vue';

import Layout from '@/layouts/main.vue';
import Card from './card.vue';

export default defineComponent({
  name: 'GalleryView',
  components: { Layout, Card },
  setup() {
    const selected = reactive<{ [id: string]: boolean }>({});
    const selectedCount = computed(
      () => Object.entries(selected).filter(([, v]) => v).length
    );

    const onSelect = (id: string) => {
      if (selected[id]) {
        selected[id] = false;
      } else {
        selected[id] = true;
      }
      console.log(selected);
    };

    return { selected, onSelect, selectedCount };
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
</style>
