<template>
  <label v-bind="$attrs" class="textbox">
    <span class="textbox__label">{{ label }}</span>
    <input type="text" v-model="model" v-bind="{ placeholder, type, step }" />
  </label>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { useValueModel } from '@/composables/useValueModel';

export default defineComponent({
  name: 'Textbox',
  inheritAttrs: false,
  props: {
    label: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: ''
    },
    step: {
      type: String,
      default: ''
    },
    modelValue: {
      type: String,
      default: ''
    }
  },
  setup(props, context) {
    const model = useValueModel(props.modelValue, context);
    return { model };
  }
});
</script>

<style lang="scss">
.textbox {
  position: relative;

  .textbox__label {
    position: absolute;
    padding: 0 6px;
    color: var(--elements-color);
    font-size: 16px;
    font-weight: 400;
    background-color: var(--page-bg);
    transform: translate(0, -9px) scale(0.75);
    transition: color 0.3s ease-in-out;
    cursor: text;
  }
  &:focus-within {
    .textbox__label {
      color: var(--primary-color);
    }
  }

  input {
    width: 100%;
    max-width: 100%;
    margin: 0;
    padding: 20px 12px;
    font-size: 16px;
    line-height: 1;
    max-height: 56px;
    background-color: transparent;
    border: 1px var(--elements-color) solid;
    border-radius: 4px;
    transition: border-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

    &:focus {
      border-color: var(--primary-color);
      outline: none;
      box-shadow: 0 0 0 1px var(--primary-color);
    }
  }
}
</style>
