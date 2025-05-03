<template>
  <div class="table-responsive">
    <table class="table table-striped align-middle">
      <thead>
        <tr>
          <th v-for="header in headers" :key="header.key">
            {{ header.label }}
          </th>
          <th v-if="$slots.actions">Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, index) in rows" :key="index">
          <td v-for="header in headers" :key="header.key">
            {{ row[header.key] }}
          </td>
          <td v-if="$slots.actions">
            <slot name="actions" :row="row" />
          </td>
        </tr>
        <tr v-if="rows.length === 0">
          <td
            :colspan="headers.length + ($slots.actions ? 1 : 0)"
            class="text-center text-muted"
          >
            No hay datos disponibles.
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'BaseTable',
  props: {
    headers: {
      type: Array,
      required: true,
      validator(value) {
        return value.every(
          (h) => typeof h.key === 'string' && typeof h.label === 'string'
        );
      },
    },
    rows: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped lang="scss">
@import '@/assets/styles/components/Table.scss';
</style>
