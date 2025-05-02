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
      return Math.round((votes / totalVotes) * 100); // Redondeando el porcentaje
    },
  },
};
</script>

<style scoped lang="scss">
.results {
  margin-top: 1rem;
}

.container {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 95%;
  margin: 0 auto;
  min-height: 80vh;
}

.card {
  width: 100%;
  max-width: 100%;
  border-radius: 16px;
  box-shadow: 0 10px 35px rgba(0, 0, 0, 0.1);
  border: none;
}

.card-header {
  background: linear-gradient(135deg, #2b0a41, #5e3ea1);
  color: #ffffff;
  text-align: center;
  font-size: 0.9rem;
  font-weight: 600;
  padding: 1rem;
  border-radius: 16px 16px 0 0;
}

.card-body {
  padding: 1.2rem;
  background-color: #ffffff;
  text-align: center;
}

.section-title {
  font-size: 0.95rem;
  font-weight: 600;
  color: #2b0a41;
  margin-bottom: 1rem;
  border-bottom: 2px solid #c9c3ff;
  padding-bottom: 0.5rem;
}

.text-muted {
  font-size: 0.85rem;
  color: #6c757d;
  margin-bottom: 1rem;
  line-height: 1.4;
}

.results-gallery {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}

.result-card {
  width: 100%;
  max-width: 300px;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.card-title {
  font-size: 13px;
  color: #2b0a41;
  font-weight: 600;
}

.card-text {
  font-size: 12px;
  color: #6c757d;
}

.result-subtitle {
  font-size: 0.85rem;
  color: #2b0a41;
  font-weight: 600;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
  text-align: left;
}

.winner-text {
  font-size: 0.75rem;
  color: #2b0a41;
  font-weight: 600;
  margin-top: 0.5rem;
  line-height: 1.2;
  text-align: center;
}

.list-group-item {
  font-size: 0.85rem;
  color: #2b0a41;
  padding: 0.75rem;
  text-align: left;
}

.vote-bar-container {
  margin-top: 1rem;
  font-size: 0.85rem;
}

.vote-bar {
  height: 20px;
  background-color: #2b0a41;
  border-radius: 5px;
  position: relative;
}

.vote-percentage {
  position: absolute;
  top: 2px;
  right: 10px;
  color: white;
  font-weight: bold;
  font-size: 0.75rem;
}

.vote-text-left {
  font-size: 0.75rem;
  color: white;
  position: absolute;
  top: -20px;
  left: 0;
  text-align: left;
  font-weight: bold;
}

.btn-primary {
  background: linear-gradient(135deg, #2b0a41, #5e3ea1);
  border-color: #2b0a41;
  color: white;
  width: 100%;
  max-width: 200px;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.btn-primary:hover {
  background: linear-gradient(135deg, #856ca0, #5e3ea1);
  border-color: #856ca0;
  transform: translateY(-2px);
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.modal-content {
  background: #ffffff;
  border-radius: 16px;
  width: 70%;
  max-width: 700px;
  padding: 2rem;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.modal-title {
  font-size: 1.25rem;
  color: #2b0a41;
  font-weight: bold;
}

.btn-close {
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
}

.modal-description {
  font-size: 0.9rem;
  color: #6c757d;
  margin-top: 1rem;
}

.modal-text {
  font-size: 0.85rem;
  color: #6c757d;
  margin-top: 1rem;
}

.winner-card {
  margin-top: 1rem;
  background-color: #f8f9fa;
  border-radius: 12px;
  padding: 1rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.winner-details {
  font-size: 1rem;
  font-weight: bold;
  color: #2b0a41;
}

.winner-details p {
  margin: 0.5rem 0;
}

.vote-bar-container {
  display: flex;
  align-items: center;
  margin-top: 1rem;
}
</style>
