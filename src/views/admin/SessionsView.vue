<template>
  <div class="app-container">
    <Sidebar />
    <div class="voting-sessions-view">
      <div class="container">
        <h1 class="title">
          <i class="fas fa-clipboard-list me-2"></i> Sesiones de votación
          activas
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
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue';

export default {
  components: {
    Sidebar,
  },
  data() {
    return {
      // Datos de prueba para las sesiones
      sessions: [
        {
          id: 1,
          title: 'Elección de presidente',
        },
        {
          id: 2,
          title: 'Elección de vicepresidente',
        },
        {
          id: 3,
          title: 'Votación para reforma de estatutos',
        },
      ],
    };
  },
  async created() {
    try {
      // Este bloque se simula como una llamada API, pero ahora se usan los datos estáticos.
      const res = { ok: true, json: () => this.sessions };
      if (res.ok) {
        this.sessions = await res.json();
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
.app-container {
  display: flex;
}

.voting-sessions-view {
  padding: 2rem;
  flex-grow: 1;
}

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
</style>
