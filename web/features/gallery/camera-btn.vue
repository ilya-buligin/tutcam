<template>
  <div class="camera-btn">
    <FloatingBtn icon="camera" @click="clickHandler" />
  </div>
</template>

<script lang="ts">
import router from '@/router';
import { setCapturedPhoto } from '@/state';
import { getPhoto } from '@/services/camera';
import FloatingBtn from '@/components/floating-btn.vue';

export default {
  name: 'CameraBtn',
  components: {
    FloatingBtn
  },
  setup() {
    const clickHandler = async () => {
      const photo = await getPhoto();
      setCapturedPhoto(photo);
      router.push({ name: 'PlaceCreation' });
    };

    return { clickHandler };
  }
};
</script>

<style lang="scss">
.camera-btn {
  --btn-size: 72px;

  position: fixed;
  bottom: 24px;
  right: 18px;
  color: var(--camera-btn-text-color);

  button {
    --btn-size: inherit;
    --icon-size: 36px;

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
    display: none;
  }

  @media (max-width: 426px) {
    & {
      bottom: 20px;
      left: calc(50% - var(--btn-size) / 2);
    }
  }
}
</style>
