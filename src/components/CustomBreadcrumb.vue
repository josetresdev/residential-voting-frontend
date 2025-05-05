<template>
  <nav aria-label="breadcrumb" class="breadcrumb-container">
    <ol class="breadcrumb">
      <li class="breadcrumb-item">
        <router-link to="/" class="breadcrumb-link">
          <i class="fas fa-home me-1 icon"></i> Inicio
        </router-link>
      </li>
      <li
        v-for="(crumb, index) in computedCrumbs"
        :key="index"
        :class="[
          'breadcrumb-item',
          { active: index === computedCrumbs.length - 1 },
        ]"
        aria-current="page"
      >
        <span
          v-if="index === computedCrumbs.length - 1"
          class="breadcrumb-active"
        >
          {{ crumb.label }}
        </span>
        <router-link v-else :to="crumb.to" class="breadcrumb-link">
          {{ crumb.label }}
        </router-link>
      </li>
    </ol>
  </nav>
</template>

<script>
export default {
  name: 'BaseBreadcrumb',
  props: {
    crumbs: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    computedCrumbs() {
      return this.crumbs;
    },
  },
};
</script>

<style scoped>
.breadcrumb-container {
  padding: 0.5rem 1rem 0.25rem;
  border-radius: 0.5rem;
  margin-bottom: 0.75rem;
  background-color: #f9fafb;
  box-shadow: none;
  font-size: 0.8rem;
  position: relative;
  top: 0;
  left: 0;
}

.breadcrumb {
  margin: 0;
  padding: 0;
  background: none;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  font-weight: 500;
  color: #4b5563;
}

.breadcrumb-item + .breadcrumb-item::before {
  content: '/';
  padding: 0 0.5rem;
  color: #9ca3af;
  font-weight: 400;
}

.breadcrumb-link {
  color: #374151;
  text-decoration: none;
  transition: color 0.2s ease;
}

.breadcrumb-link:hover {
  color: #1f2937;
}

.breadcrumb-active {
  color: #111827;
  font-weight: 600;
}

.icon {
  font-size: 0.75rem;
  margin-right: 0.25rem;
  vertical-align: middle;
}
</style>
