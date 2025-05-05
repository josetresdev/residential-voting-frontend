<template>
  <div class="filters">
    <h4><i class="fas fa-filter"></i> Filtros</h4>
    <form @submit.prevent="applyFilters">
      <div class="form-row">
        <div
          v-for="(filter, index) in filterFields"
          :key="index"
          class="form-group"
        >
          <label :for="filter.name">{{ filter.label }}</label>
          <component
            :is="filter.type === 'select' ? 'select' : 'input'"
            v-model="filters[filter.name]"
            :id="filter.name"
            :placeholder="filter.placeholder || ''"
            v-bind="filter.props || {}"
          >
            <option v-if="filter.type === 'select'" disabled value="">
              {{ filter.placeholder || 'Seleccione una opción' }}
            </option>
            <option
              v-for="(option, optionIndex) in filter.options"
              :key="optionIndex"
              :value="option.value"
            >
              {{ option.text }}
            </option>
          </component>
        </div>
      </div>
      <div class="form-actions">
        <button type="submit" class="btn-apply">
          <i class="fas fa-check"></i> Aplicar
        </button>
        <button type="button" class="btn-clear" @click="clearFilters">
          <i class="fas fa-eraser"></i> Limpiar
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  props: {
    filterFields: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      filters: {},
    };
  },
  watch: {
    filterFields: {
      immediate: true,
      handler(newFields) {
        this.filters = newFields.reduce((acc, filter) => {
          acc[filter.name] = filter.value || '';
          return acc;
        }, {});
      },
    },
  },
  methods: {
    applyFilters() {
      this.$emit('apply-filters', this.filters);
    },
    clearFilters() {
      this.filters = this.filterFields.reduce((acc, filter) => {
        acc[filter.name] = '';
        return acc;
      }, {});
      this.$emit('apply-filters', this.filters);
    },
  },
};
</script>

<style scoped lang="scss">
.filters {
  background-color: #f8f9fc;
  padding: 1rem;
  border-radius: 8px;
  margin-top: 1rem;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  transition: max-height 0.3s ease-out;
  max-height: 1000px;
  overflow: hidden;

  h4 {
    color: #2b0a41;
    font-weight: 600;
    margin-bottom: 1rem;
    font-size: 0.875rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;

    i {
      font-size: 1.2rem;
    }
  }

  .form-row {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;

    .form-group {
      flex: 1 1 30%;
      margin-bottom: 0.75rem;

      label {
        font-weight: 600;
        color: #2b0a41;
        font-size: 0.75rem;
        margin-bottom: 0.5rem;
        display: flex;
        align-items: center;
      }

      select,
      input {
        width: 100%;
        padding: 0.4rem 0.6rem;
        border-radius: 6px;
        border: 1px solid #c9c3ff;
        font-size: 0.75rem;
        transition: border-color 0.3s ease, box-shadow 0.3s ease;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);

        &::placeholder {
          color: #a0a0a0;
          font-style: normal;
        }

        &:focus {
          border-color: #5e3ea1;
          outline: none;
          box-shadow: 0 0 2px rgba(94, 62, 161, 0.2);
        }
      }
    }
  }

  .form-actions {
    display: flex;
    justify-content: flex-end;
    gap: 1rem;

    button {
      padding: 0.4rem 1rem;
      font-size: 0.75rem;
      border-radius: 6px;
      font-weight: 600;
      cursor: pointer;
      transition: background-color 0.3s ease, transform 0.2s ease;
      width: auto;
      display: inline-flex;
      justify-content: center;
      align-items: center;

      &.btn-apply {
        background-color: #2b0a41;
        color: white;

        &:hover {
          background-color: #4b1d5d;
          transform: scale(1.05);
        }

        i {
          margin-right: 0.5rem;
        }
      }

      &.btn-clear {
        background-color: #e0e0e0;
        color: #333;
        border: none;

        &:hover {
          background-color: #bdbdbd;
          transform: scale(1.05);
        }

        i {
          margin-right: 0.5rem;
        }
      }
    }
  }

  &.collapsed {
    max-height: 0;
    padding: 0;
    visibility: hidden;
  }
}
</style>
