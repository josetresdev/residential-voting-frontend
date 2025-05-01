<template>
  <div class="results-view container">
    <h1 class="title">
      <i class="fas fa-chart-bar me-2"></i> Resultados de votación por sesión
    </h1>

    <div v-if="!sessions.length" class="text-center text-muted">
      <i class="fas fa-info-circle me-2"></i> No hay resultados disponibles por
      sesión.
    </div>

    <div v-else>
      <div
        class="session-results"
        v-for="(session, index) in sessions"
        :key="session.id"
      >
        <h3
          class="session-title d-flex justify-content-between align-items-center"
        >
          <span>{{ index + 1 }} - {{ session.title }}</span>
          <span class="badge bg-success">
            <i class="fas fa-trophy me-2"></i> Ganador:
            {{ getWinner(session.results) }}
          </span>
        </h3>

        <div v-if="session.results.length === 0" class="text-center text-muted">
          <i class="fas fa-info-circle me-2"></i> No hay resultados para esta
          sesión.
        </div>

        <div v-else>
          <b-collapse id="collapse-session-{{ session.id }}" class="my-3">
            <b-card>
              <div class="table-responsive">
                <table class="table table-hover table-bordered">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Opción</th>
                      <th>Votos</th>
                      <th>Porcentaje</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="(result, index) in session.results"
                      :key="result.option_id"
                    >
                      <td>{{ index + 1 }}</td>
                      <td>{{ result.option }}</td>
                      <td>{{ result.votes }}</td>
                      <td>
                        <div class="progress-container">
                          <div
                            class="progress-bar"
                            :style="{ width: `${result.percentage}%` }"
                          ></div>
                        </div>
                        <span>{{ result.percentage }}%</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </b-card>
          </b-collapse>
        </div>
      </div>

      <div class="d-flex justify-content-between my-4">
        <button class="btn btn-success" @click="exportResults">
          <i class="fas fa-download me-2"></i> Exportar resultados
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ResultsView',
  data() {
    return {
      sessions: [
        {
          id: 1,
          title: 'Elección de presidente',
          results: [
            { option_id: 1, option: 'Candidato A', votes: 120, percentage: 45 },
            { option_id: 2, option: 'Candidato B', votes: 100, percentage: 38 },
            { option_id: 3, option: 'Candidato C', votes: 50, percentage: 17 },
          ],
        },
        {
          id: 2,
          title: 'Elección de vicepresidente',
          results: [
            { option_id: 1, option: 'Candidato D', votes: 130, percentage: 50 },
            { option_id: 2, option: 'Candidato E', votes: 70, percentage: 27 },
            { option_id: 3, option: 'Candidato F', votes: 50, percentage: 23 },
          ],
        },
      ],
    };
  },
  methods: {
    exportResults() {
      const csvData = [];
      this.sessions.forEach((session) => {
        session.results.forEach((result) => {
          csvData.push([
            session.title,
            result.option,
            result.votes,
            result.percentage,
          ]);
        });
      });
      let csvContent = 'Sesión,Opción,Votos,Porcentaje\n';
      csvData.forEach((row) => {
        csvContent += row.join(',') + '\n';
      });

      const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = 'resultados_votacion_por_sesion.csv';
      link.click();
    },
    getWinner(results) {
      const winner = results.reduce((prev, current) =>
        prev.votes > current.votes ? prev : current
      );
      return winner.option;
    },
  },
};
</script>

<style scoped lang="scss">
.results-view {
  padding: 2rem 1.5rem;
  max-width: 1200px;
  margin: auto;
}

.title {
  font-size: 2rem;
  font-weight: 700;
  color: #2b0a41;
  text-align: center;
  margin-bottom: 2rem;
  border-bottom: 3px solid #2b0a41;
  padding-bottom: 0.5rem;
}

.session-results {
  margin-top: 2rem;
}

.session-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2b0a41;
  margin-bottom: 1rem;
  border-bottom: 2px solid #2b0a41;
  padding-bottom: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.table {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  margin-top: 1.5rem;
  border-collapse: collapse;

  th {
    background-color: #2b0a41;
    color: #fff;
    text-align: center;
    font-size: 0.9rem;
  }

  td {
    text-align: center;
    font-size: 0.9rem;
  }

  .table-hover tbody tr:hover {
    background-color: #e9ecef;
    cursor: pointer;
  }
}

.progress-container {
  position: relative;
  width: 100%;
  height: 12px;
  background-color: #e9ecef;
  border-radius: 10px;
  margin-bottom: 5px;
}

.progress-bar {
  position: absolute;
  height: 100%;
  background-color: #2b0a41;
  border-radius: 10px;
  transition: width 0.3s ease-in-out;
}

.btn {
  font-size: 0.9rem;
  padding: 0.6rem 1.2rem;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.btn-success {
  background-color: #28a745;
  color: white;
  border: none;

  &:hover {
    background-color: #218838;
  }
}

.d-flex {
  margin-top: 2rem;
}

.text-muted {
  font-size: 0.9rem;
  color: #6c757d;
  margin-top: 2rem;
}

.text-center {
  font-size: 0.9rem;
  color: #6c757d;
  padding: 2rem;
}
</style>
