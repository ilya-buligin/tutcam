<template>
  <div class="camera-btn">
    <FloatingBtn icon="camera" @click="clickHandler" />
    <input ref="cameraInput" type="file" accept="image/*;capture=camera" />
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';

import FloatingBtn from '@/components/floating-btn.vue';

export default {
  name: 'CameraBtn',
  components: {
    FloatingBtn
  },
  setup() {
    const cameraInput = ref();
    const clickHandler = () => {
      console.log(cameraInput.value);
      (cameraInput.value as HTMLInputElement).click();
    };
    return { clickHandler, cameraInput };
  }
};
</script>

<style lang="scss">
.camera-btn {
  --btn-size: 64px;

  position: fixed;
  bottom: 80px;
  right: 16px;
  color: var(--camera-btn-color);

  button {
    --btn-size: inherit;
    --icon-size: 32px;

    &:hover {
      span {
        transform: scale(1.05);
      }
    }

    span {
      transition: transform 0.3s;
    }
  }

  input {
    position: absolute;
    opacity: 0;
    transform: scale(0);
  }

  @media (max-width: 426px) {
    & {
      bottom: 20px;
      left: calc(50% - var(--btn-size) / 2);
    }
  }
}
</style>
