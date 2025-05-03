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
            <strong>Inicio:</strong> {{ formatDate(currentResult.start_date)
            }}<br />
            <strong>Cierre:</strong> {{ formatDate(currentResult.end_date) }}
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
                  Porcentaje:
                  {{
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
import resultsService from '@/services/client/results.service';

export default {
  name: 'ResultsView',
  data() {
    return {
      results: [],
      currentResult: null,
      isModalOpen: false,
      error: null,
    };
  },
  created() {
    this.results = resultsService.getAllResults();
  },
  methods: {
    formatDate: resultsService.formatDate,
    getWinner: resultsService.getWinner,
    getPercentage: resultsService.getPercentage,
    viewDetails(result) {
      this.currentResult = result;
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
    },
  },
};
</script>

<style scoped lang="scss">
@import '@/assets/styles/client/Results.scss';
</style>
