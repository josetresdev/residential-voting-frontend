const mockSessions = [
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
];

export default {
  getVotingResults() {
    return Promise.resolve([...mockSessions]);
  },

  exportResultsToCSV(sessions) {
    const csvData = [];
    sessions.forEach((session) => {
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
    if (!results.length) return 'Sin datos';
    return results.reduce((prev, current) =>
      prev.votes > current.votes ? prev : current
    ).option;
  },
};
