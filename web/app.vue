<template>
  <Suspense>
    <template #default>
      <router-view id="app" />
    </template>
    <template #fallback>
      Loading...
    </template>
  </Suspense>
</template>

<style lang="scss">
@import './styles/main.scss';
</style>
