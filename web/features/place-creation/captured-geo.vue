<template>
  <div class="captured-geo mb-1">
    <!-- <TextBox
      class="mr-1-4"
      label="Latitude"
      v-model="coords.latitude"
      type="number"
      step="0.000001"
    /> -->
    <!-- {{ foo }} -->
    <TextBox
      label="Longitude"
      v-model="foo"

    />
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  watch,
  computed,
  watchEffect,
  reactive
} from 'vue';

import { debug } from '@/services/dev-stuff';
import { getGeo } from '@/services/geo';
import { setCapturedGeo, useCapturedPhoto, useCapturedGeo } from '@/state';

import TextBox from '@/components/textbox.vue';

export default defineComponent({
  name: 'CapturedGeo',
  components: {
    TextBox
  },
  async setup() {
    const photo = useCapturedPhoto();
    const coords = useCapturedGeo();

    const foo = ref('')

    watch(
      () => photo,
      async () => {
        const geo = await getGeo();
        debug('Captured GEO', geo);
        setCapturedGeo(geo);
      },
      { immediate: true }
    );

    return { coords,foo };
  }
});
</script>

<style>
.captured-geo {
  display: flex;
  flex-wrap: nowrap;
}
</style>
