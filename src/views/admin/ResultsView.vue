<template>
  <div class="app-container">
    <Sidebar />

    <div class="results-view">
      <div class="container">
        <h1 class="title">
          <i class="fas fa-chart-bar me-2"></i> Resultados de votación por
          sesión
        </h1>

        <div v-if="!sessions.length" class="text-muted text-center">
          No hay resultados disponibles por sesión.
        </div>

        <div v-else>
          <ul class="sessions-list">
            <li
              v-for="(session, index) in sessions"
              :key="session.id"
              class="session-item"
            >
              <div
                class="session-header d-flex justify-content-between align-items-center"
              >
                <span>{{ index + 1 }} - {{ session.title }}</span>
                <span class="badge bg-success">
                  <i class="fas fa-trophy me-2"></i> Ganador:
                  {{ getWinner(session.results) }}
                </span>
              </div>

              <div
                v-if="session.results.length === 0"
                class="text-center text-muted"
              >
                No hay resultados para esta sesión.
              </div>

              <div v-else>
                <div class="table-responsive">
                  <table class="table table-hover table-bordered">
                    <thead>
                      <tr>
                        <th># <i class="fas fa-hashtag"></i></th>
                        <th>Opción <i class="fas fa-check-circle"></i></th>
                        <th>Votos <i class="fas fa-vote-yea"></i></th>
                        <th>Porcentaje <i class="fas fa-percent"></i></th>
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
              </div>
            </li>
          </ul>

          <div class="d-flex justify-content-between my-4">
            <button class="btn btn-success" @click="exportResults">
              <i class="fas fa-download me-2"></i> Exportar resultados
            </button>
          </div>
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
      const winner = results.reduce((prev, current) => {
        return prev.votes > current.votes ? prev : current;
      });
      return winner.option;
    },
  },
};
</script>

<style scoped lang="scss">
@import '@/assets/styles/admin/Results.scss';
</style>
