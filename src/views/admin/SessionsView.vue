<template>
  <div class="voting-sessions-view">
    <div class="container">
      <h1 class="title">
        <i class="fas fa-clipboard-list me-2"></i> Sesiones de votación activas
      </h1>

      <div v-if="sessions.length === 0" class="text-muted text-center">
        No hay sesiones de votación activas en este momento.
      </div>

      <div v-else>
        <ul class="sessions-list">
          <li
            v-for="session in sessions"
            :key="session.id"
            class="session-item"
          >
            <span>{{ session.title }}</span>
            <router-link :to="`/client/vote/${session.id}`" class="btn-vote">
              Votar
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sessions: [
        { id: 1, title: 'Votación sobre el proyecto de ley A' },
        { id: 2, title: 'Votación sobre el presupuesto de la comunidad' },
        { id: 3, title: 'Votación sobre el nuevo parque local' },
        { id: 4, title: 'Votación sobre la mejora de servicios de transporte' },
        { id: 5, title: 'Votación sobre la creación de un centro cultural' },
      ],
    };
  },
  async created() {
    try {
      // Simulando la obtención de datos de la API
      // En una implementación real, puedes hacer un fetch a una API aquí
      const res = { ok: true, json: () => this.sessions };
      if (res.ok) {
        this.sessions = await res.json(); // Actualiza las sesiones con los datos de ejemplo
      } else {
        console.error('Error al cargar las sesiones:', res.statusText);
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
    }
  },
};
</script>

<style scoped lang="scss">
.voting-sessions-view {
  padding: 2rem;

  .container {
    max-width: 1100px;
    margin: auto;
    padding: 0 1.5rem;
  }

  .title {
    font-size: 2rem;
    font-weight: bold;
    color: #2b0a41;
    text-align: center;
    margin-bottom: 2rem;
    border-bottom: 4px solid #2b0a41;
    padding-bottom: 0.5rem;
  }

  .text-muted {
    font-size: 1rem;
    color: #6c757d;
    margin-top: 2rem;
  }

  .sessions-list {
    list-style-type: none;
    padding: 0;

    .session-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: #fff;
      border-radius: 8px;
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
      margin-bottom: 1rem;
      padding: 1rem;
      transition: background-color 0.3s;

      &:hover {
        background-color: #f9f4ff;
      }

      span {
        font-size: 1.1rem;
        font-weight: 600;
      }

      .btn-vote {
        background-color: #2b0a41;
        color: white;
        padding: 0.6rem 1.4rem;
        border: none;
        border-radius: 8px;
        font-weight: 600;
        cursor: pointer;
        text-decoration: none;
        transition: background-color 0.3s;

        &:hover {
          background-color: #5a36a0;
        }
      }
    }
  }
}
</style>
