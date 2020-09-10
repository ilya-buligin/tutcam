<template>
  <li class="gallery-card" :class="{ 'gallery-card--selected': selected }">
    <div class="gallery-card__checkbox-container">
      <IconBtn
        icon="check_circle"
        class="gallery-card__checkbox"
        @click="$emit('select')"
      />
    </div>
    <a
      href="#"
      class="gallery-card__container"
      @click.prevent="$emit('link-click')"
    >
      <img class="gallery-card__preview" v-bind="{ src }" :alt="name" />
      <div class="gallery-card__overlay"></div>
      <p class="gallery-card__title">
        {{ name }} <br /><small>{{ address }}</small>
      </p>
    </a>
  </li>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import IconBtn from '@/components/icon-btn.vue';

export default defineComponent({
  name: 'CardGallery',
  components: {
    IconBtn
  },
  props: {
    selected: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    const src = ref(`https://source.unsplash.com/random?r=${Math.random()}`);
    const name = '46.87901 32.99102';
    const address = ref('Independence Square 1');

    return { src, name, address };
  }
});
</script>

<style lang="scss">
$border-radius: 4px;

.gallery-card {
  position: relative;
  display: block;
  padding-top: 86.2%;
  list-style: none;
  border-radius: $border-radius;
  box-sizing: content-box;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0 2px 0 rgba(0, 0, 0, 0.12);
  &:focus-within:not(.gallery-card__checkbox:focus) {
    box-shadow: 0 0 0 3px var(--primary-color);
  }

  .gallery-card__container {
    position: absolute;
    display: block;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border-radius: $border-radius;
    overflow: hidden;
    outline: none;
    border: 0px solid;
    transition: border 0.2s ease-in-out;

    &:focus {
      box-shadow: 0 0 0 3px var(--primary-color);
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center center;
      border-radius: $border-radius;
      transition: transform 0.3s;
    }
  }

  .gallery-card__title {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin: 0;
    padding: 16px;
    text-align: right;
    font-size: 20px;
    font-weight: 500;
    color: #fff;
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
    pointer-events: none;
    small {
      font-weight: 400;
      font-size: 14px;
    }
  }

  .gallery-card__checkbox-container {
    top: 0;
    position: absolute;
  }
  .gallery-card__checkbox {
    color: rgba(255, 255, 255, 0.4);
    z-index: 1;

    &:focus,
    &:hover {
      color: #fff;
      background-color: rgba(#0288d1, 0.3);
    }
  }

  .gallery-card__overlay {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: linear-gradient(
      to bottom,
      rgba(10, 10, 10, 0.4),
      rgba(0, 0, 0, 0),
      rgba(10, 10, 10, 0.4)
    );
  }
}

.gallery-card--selected {
  .gallery-card__checkbox {
    color: var(--primary-color);
    &:focus,
    &:hover {
      color: var(--primary-color);
      background-color: rgba(#fff, 0.5);
    }
  }

  .gallery-card__container {
    img {
      border-radius: 0;
    }
    border: 14px solid rgba(#0288d1, 0.2);
  }
}
</style>
