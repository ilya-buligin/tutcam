<template>
  <div class="captured-photo">
    <img v-if="!!src" v-bind="{ src }" alt="Captured photo" />
  </div>
</template>

<script lang="ts">
import { debug } from '@/services/dev-stuff';

import { defineComponent, ref, watchEffect } from 'vue';

import { useCapturedPhoto } from '@/state';

export default defineComponent({
  name: 'CapturedPhoto',
  async setup() {
    const photo = useCapturedPhoto();
    debug('Captured photo', photo.value);

    const src = ref<string>('');

    const fr = new FileReader();

    fr.onload = e => {
      debug('FileReader onload', e);
      src.value = (e.target?.result as string) || '';
    };

    watchEffect(() => photo.value && fr.readAsDataURL(photo.value));

    return { src };
  }
});
</script>

<style lang="scss">
.captured-photo {
  position: relative;
  max-width: 100%;
  padding-bottom: 100%;
  margin-bottom: 16px;
  background-color: var(--elements-color);

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
