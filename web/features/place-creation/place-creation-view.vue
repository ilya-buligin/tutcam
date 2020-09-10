<template>
  <Layout title="Add new place">
    <form action="" class="place-creation">
      <CapturedPhoto />
      <TextBox label="Name" class="mb-1" :placeholder="defaultName" />
      <!-- <CapturedGeo /> -->
    </form>
  </Layout>
</template>

<script lang="ts">
import { debug } from '@/services/dev-stuff';

import { defineComponent, computed } from 'vue';

import Layout from '@/layouts/main.vue';

import TextBox from '@/components/textbox.vue';

import CapturedPhoto from './captured-photo.vue';
import CapturedGeo from './captured-geo.vue';
import { useCapturedGeo } from '@/state';

export default defineComponent({
  name: 'PlaceCreationView',
  components: { Layout, CapturedPhoto, CapturedGeo, TextBox },
  async setup() {
    const geo = useCapturedGeo();

    const latitude = computed(() => geo.value?.latitude.toFixed(6));
    const longitude = computed(() => geo.value?.latitude.toFixed(6));
    const defaultName = computed(() => {
      const lat = latitude.value;
      const lon = longitude.value;
      const name = lat && lon ? `${lat}, ${lon}` : '';
      debug('Computed default name', name);
      return name;
    });

    return { defaultName };
  }
});
</script>

<style>
.place-creation {
  max-width: 400px;
  display: flex;
  flex-direction: column;
}
</style>
