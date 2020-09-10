import { computed, Ref, ref, SetupContext, UnwrapRef } from 'vue';

export const useValueModel = <T>(value: T, { emit }: SetupContext) => {
  const localValue = ref(value);
  const valueModel = computed({
    get() {
      return value;
    },
    set(v) {
      console.log(v)
      localValue.value = v as UnwrapRef<T>;
      emit('update:modelValue', v);
    }
  });

  return valueModel;
};
