import { ref, computed, reactive } from 'vue';
import { Coords } from "../types/coords";

const state = ref({
  capturedPhoto: null as File | null,
  capturedGeo: null as Coords | null
});

export type State = typeof state;

export const useCapturedPhoto = () => computed(() => state.value.capturedPhoto);
export const setCapturedPhoto = (payload: typeof state.value.capturedPhoto) =>
  (state.value.capturedPhoto = payload);

export const useCapturedGeo = () => computed(() => state.value.capturedGeo);
export const setCapturedGeo = (payload: typeof state.value.capturedGeo) =>
  (state.value.capturedGeo = payload);
