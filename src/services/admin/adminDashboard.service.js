let dashboardData = [
  {
    id: 1,
    title: 'Gestión de usuarios',
    description:
      'Agrega, edita o elimina cuentas de votantes y administradores registrados en el sistema.',
    icon: 'fas fa-users',
    route: '/administrador/usuarios',
  },
  {
    id: 2,
    title: 'Gestión de preguntas',
    description:
      'Crea y administra las preguntas que serán presentadas durante las sesiones de votación.',
    icon: 'fas fa-question-circle',
    route: '/administrador/preguntas',
  },
  {
    id: 3,
    title: 'Gestión de opciones',
    description:
      'Define y organiza las opciones de respuesta disponibles para cada pregunta activa.',
    icon: 'fas fa-list-ul',
    route: '/administrador/opciones',
  },
  {
    id: 4,
    title: 'Sesiones de votación',
    description:
      'Programa, habilita y gestiona las sesiones de votación activas y finalizadas.',
    icon: 'fas fa-calendar-alt',
    route: '/administrador/sesiones-votacion',
  },
  {
    id: 5,
    title: 'Resultados',
    description:
      'Consulta y analiza los resultados obtenidos al cierre de las sesiones de votación.',
    icon: 'fas fa-chart-pie',
    route: '/administrador/resultados',
  },
];

export default {
  getDashboardItems() {
    return dashboardData;
  },
};
