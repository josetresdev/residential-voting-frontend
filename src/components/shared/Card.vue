<!-- BaseCard.vue -->
<template>
  <div class="card-base shadow-sm p-4 rounded">
    <div v-if="$slots.header" class="card-header mb-3">
      <slot name="header" />
    </div>

    <div class="card-body">
      <slot />
    </div>

    <div v-if="$slots.footer" class="card-footer mt-3 text-end">
      <slot name="footer" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseCard',
};
</script>

<style scoped lang="scss">
@import '@/assets/styles/components/Card.scss';
</style>
