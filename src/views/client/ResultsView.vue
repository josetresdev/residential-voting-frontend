<template>
  <div class="results">
    <div class="container">
      <div class="card">
        <div class="card-header">
          <i class="fas fa-chart-bar me-2"></i>
          Resultados de las elecciones
        </div>
        <div class="card-body">
          <h2 class="section-title">Resultados de las elecciones</h2>
          <p class="text-muted">
            Consulta los resultados de las elecciones realizadas.
          </p>

          <div v-if="results.length > 0">
            <div class="results-gallery">
              <div
                v-for="result in results"
                :key="result.id"
                class="result-card card"
              >
                <div class="card-body">
                  <h5 class="card-title">
                    <i class="fas fa-clipboard-list me-2"></i>
                    {{ result.title }}
                  </h5>
                  <p class="card-text">
                    <strong>Inicio:</strong>
                    {{ formatDate(result.start_date) }}
                    <br />
                    <strong>Cierre:</strong>
                    {{ formatDate(result.end_date) }}
                  </p>

                  <!-- Solo mostramos el candidato ganador -->
                  <div v-if="getWinner(result)">
                    <h6 class="result-subtitle">Opción ganadora:</h6>
                    <p class="winner-text">
                      <strong>{{ getWinner(result).name }}</strong>
                    </p>
                    <p class="winner-text">
                      <strong>Votos:</strong>
                      {{ getWinner(result).votes }}
                    </p>
                    <p class="winner-text">
                      <strong>Porcentaje:</strong>
                      {{ getPercentage(result, getWinner(result).votes) }}%
                    </p>
                  </div>

                  <div class="text-center">
                    <button
                      class="btn btn-primary mt-3"
                      @click="viewDetails(result)"
                    >
                      <i class="fas fa-info-circle me-2"></i> Ver detalles
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <p v-else class="text-muted">
            No hay resultados disponibles en este momento.
          </p>

          <p v-if="error" class="error-message">
            {{ error }}
          </p>
        </div>
      </div>
    </div>
    <!-- Modal de detalles de resultado -->
    <div v-if="isModalOpen" class="modal-overlay" @click="closeModal">
      <div class="modal-content" @click.stop>
        <div class="modal-header">
          <h4 class="modal-title">
            <i class="fas fa-chart-bar me-2"></i> Resultados completos
          </h4>
          <button @click="closeModal" class="btn-close">
            <i class="fas fa-times-circle"></i>
          </button>
        </div>
        <div class="modal-body">
          <h5>{{ currentResult.title }}</h5>
          <p class="modal-description">Detalles completos de la elección:</p>
          <ul class="list-group">
            <li
              v-for="(candidate, index) in currentResult.candidates"
              :key="index"
              class="list-group-item"
            >
              {{ candidate.name }} -
              <strong>{{ candidate.votes }} votos</strong>
            </li>
          </ul>
          <p class="modal-text">
            <strong>Inicio:</strong>
            {{ formatDate(currentResult.start_date) }}
            <br />
            <strong>Cierre:</strong>
            {{ formatDate(currentResult.end_date) }}
          </p>

          <div
            v-if="currentResult.candidates.length > 0"
            class="winner-card card"
          >
            <div class="card-body">
              <h6 class="card-title text-center">Opción ganadora</h6>
              <div class="winner-details">
                <strong>{{ getWinner(currentResult).name }}</strong>
                <p>Votos: {{ getWinner(currentResult).votes }}</p>
                <p>
                  Porcentaje:{{
                    getPercentage(
                      currentResult,
                      getWinner(currentResult).votes
                    )
                  }}%
                </p>
              </div>

              <div
                v-for="candidate in currentResult.candidates"
                :key="candidate.name"
                class="vote-bar-container"
              >
                <div class="candidate-name">{{ candidate.name }}</div>
                <div
                  class="vote-bar"
                  :style="{
                    width: getPercentage(currentResult, candidate.votes) + '%',
                  }"
                >
                  <span class="vote-percentage">
                    {{ getPercentage(currentResult, candidate.votes) }}%
                  </span>
                </div>
                <div class="vote-text-left">{{ candidate.votes }} votos</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      results: [
        {
          id: 1,
          title: 'Elección de presidente de la junta de administración',
          start_date: '2025-05-01',
          end_date: '2025-05-10',
          candidates: [
            { name: 'Juan Pérez', votes: 120 },
            { name: 'Ana Gómez', votes: 98 },
            { name: 'Carlos Rodríguez', votes: 65 },
          ],
        },
        {
          id: 2,
          title: 'Votación para elegir secretario de la junta',
          start_date: '2025-04-25',
          end_date: '2025-05-05',
          candidates: [
            { name: 'Laura Fernández', votes: 142 },
            { name: 'Miguel Torres', votes: 107 },
          ],
        },
        {
          id: 3,
          title: 'Elección de tesorero de la junta de administración',
          start_date: '2025-05-02',
          end_date: '2025-05-15',
          candidates: [
            { name: 'Pedro Sánchez', votes: 110 },
            { name: 'María López', votes: 134 },
            { name: 'José Ramírez', votes: 82 },
          ],
        },
        {
          id: 4,
          title: 'Votación para elegir vocales',
          start_date: '2025-05-10',
          end_date: '2025-05-20',
          candidates: [
            { name: 'Luis Martínez', votes: 200 },
            { name: 'Ana Silva', votes: 155 },
          ],
        },
        {
          id: 5,
          title: 'Votación para modificar el reglamento',
          start_date: '2025-05-05',
          end_date: '2025-05-15',
          candidates: [
            { name: 'Sí', votes: 400 },
            { name: 'No', votes: 50 },
          ],
        },
      ],
      currentResult: null,
      isModalOpen: false,
      error: null,
    };
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(date).toLocaleDateString('es-ES', options);
    },
    viewDetails(result) {
      this.currentResult = result;
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
    },
    getWinner(result) {
      const sortedCandidates = result.candidates.sort(
        (a, b) => b.votes - a.votes
      );
      return sortedCandidates[0];
    },
    getPercentage(result, votes) {
      const totalVotes = result.candidates.reduce(
        (sum, candidate) => sum + candidate.votes,
        0
      );
      return Math.round((votes / totalVotes) * 100);
    },
  },
};
</script>

<style scoped lang="scss">
@import '@/assets/styles/client/Results.scss';
</style>
