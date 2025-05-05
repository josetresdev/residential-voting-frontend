<template>
  <td class="actions-container">
    <button class="icon-button view" @click="onViewClick" title="Ver usuario">
      <i class="fas fa-eye"></i>
    </button>
    <button
      class="icon-button edit"
      @click="onEditClick"
      title="Editar usuario"
    >
      <i class="fas fa-edit"></i>
    </button>
    <button
      class="icon-button delete"
      @click="onDeleteClick"
      title="Eliminar usuario"
    >
      <i class="fas fa-trash-alt"></i>
    </button>
  </td>
</template>

<script>
export default {
  props: {
    userId: {
      type: Number,
      required: true,
    },
    onView: {
      type: Function,
      required: true,
    },
    onEdit: {
      type: Function,
      required: true,
    },
    onDelete: {
      type: Function,
      required: true,
    },
  },
  methods: {
    onViewClick() {
      this.onView(this.userId);
    },
    onEditClick() {
      this.onEdit(this.userId);
    },
    onDeleteClick() {
      this.onDelete(this.userId);
    },
  },
};
</script>

<style scoped lang="scss">
.actions-container {
  display: flex;
  justify-content: center;
  gap: 6px;

  .icon-button {
    background-color: #f8f9fa;
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 6px;
    cursor: pointer;
    transition: transform 0.2s ease, box-shadow 0.2s ease,
      background-color 0.3s ease;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

    i {
      font-size: 14px;
      color: #6c757d;
    }

    &:hover {
      transform: scale(1.1);
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
    }

    &:focus {
      outline: none;
    }

    &.view {
      background-color: #e2e3e5;
      border-color: #d6d8db;
      i {
        color: #6c757d;
      }

      &:hover {
        background-color: #c3c6ca;
      }
    }

    &.edit {
      background-color: #d6b6ff;
      border-color: #b69aff;
      i {
        color: #6f42c1;
      }

      &:hover {
        background-color: #c6a2ff;
      }
    }

    &.delete {
      background-color: #f8d7da;
      border-color: #f5c6cb;
      i {
        color: #dc3545;
      }

      &:hover {
        background-color: #f1b0b7;
      }
    }
  }
}
</style>
