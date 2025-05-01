<template>
  <div class="results-view">
    <div class="container">
      <div class="card">
        <div class="card-header">
          <i class="fas fa-chart-bar me-2"></i>
          Resultados de Votación
        </div>

        <div class="card-body" v-if="results.length > 0">
          <table class="table">
            <thead>
              <tr>
                <th>#</th>
                <th>Candidato</th>
                <th>Votos</th>
                <th>Porcentaje</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(result, index) in results" :key="result.id">
                <td>{{ index + 1 }}</td>
                <td>{{ result.candidate }}</td>
                <td>{{ result.votes }}</td>
                <td>{{ result.percentage }}%</td>
              </tr>
            </tbody>
          </table>

          <div class="export-button">
            <button class="btn btn-primary" @click="exportResults">
              <i class="fas fa-download me-2"></i>Exportar Resultados
            </button>
          </div>
        </div>

        <div class="no-results" v-else>
          <p class="text-muted">Aún no hay resultados disponibles.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ResultsView',
  data() {
    return {
      results: [],
    };
  },
  mounted() {
    this.loadResults();
  },
  methods: {
    loadResults() {
      this.results = [
        { id: 1, candidate: 'Candidato A', votes: 120, percentage: 45 },
        { id: 2, candidate: 'Candidato B', votes: 100, percentage: 38 },
        { id: 3, candidate: 'Candidato C', votes: 50, percentage: 17 },
      ];
    },
    exportResults() {
      const csvData = this.results.map((result) => [
        result.candidate,
        result.votes,
        result.percentage,
      ]);
      let csvContent = 'Candidato,Votos,Porcentaje\n';
      csvData.forEach((row) => {
        csvContent += row.join(',') + '\n';
      });

      const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = 'resultados_votacion.csv';
      link.click();
    },
  },
};
</script>

<style scoped lang="scss">
.results-view {
  margin-top: 2rem;
}

.container {
  display: flex;
  justify-content: center;
  align-items: flex-start;
}

.card {
  width: 100%;
  max-width: 700px;
  border-radius: 16px;
  box-shadow: 0 8px 28px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  background-color: #ffffff;
}

.card-header {
  background-color: #2b0a41;
  color: #ffffff;
  padding: 1.2rem;
  font-size: 1.5rem;
  font-weight: 600;
  text-align: center;
}

.card-body {
  padding: 2rem;
}

.table {
  width: 100%;
  border-collapse: collapse;

  th {
    background-color: #f2f2f2;
    padding: 0.75rem;
    text-align: left;
    font-weight: 600;
    color: #333;
  }

  td {
    padding: 0.75rem;
    border-top: 1px solid #e0e0e0;
    color: #555;
  }

  tr:hover {
    background-color: #f9f9f9;
  }
}

.export-button {
  margin-top: 2rem;
  display: flex;
  justify-content: center;
}

.btn {
  font-size: 1.1rem;
  padding: 0.8rem 1.5rem;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.btn-primary {
  background-color: #2b0a41;
  color: #ffffff;
}

.btn-primary:hover {
  background-color: #856ca0;
  transform: translateY(-2px);
}

.no-results {
  padding: 2rem;
  text-align: center;
}

.text-muted {
  font-size: 1rem;
  color: #6c757d;
}
</style>
