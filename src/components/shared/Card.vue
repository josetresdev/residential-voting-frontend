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
.card-base {
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 12px;
  transition: box-shadow 0.2s ease-in-out;
}

.card-base:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

.card-header {
  font-weight: 600;
  font-size: 1.2rem;
  border-bottom: 1px solid #eee;
  padding-bottom: 0.5rem;
}

.card-footer {
  border-top: 1px solid #eee;
  padding-top: 0.5rem;
}
</style>
