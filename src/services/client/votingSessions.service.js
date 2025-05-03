const mockSessions = [
  {
    id: 1,
    title: 'Elección de presidente de la junta de administración',
    start_date: '2025-05-01',
    end_date: '2025-05-10',
    questions: [
      {
        text: '¿Quién debe ser el nuevo presidente de la junta?',
        options: ['Juan Pérez', 'Ana Gómez', 'Carlos Rodríguez'],
      },
      {
        text: '¿Aprobar el presupuesto de mantenimiento 2025?',
        options: ['Sí', 'No'],
      },
    ],
  },
  {
    id: 2,
    title: 'Votación para elegir secretario de la junta',
    start_date: '2025-04-25',
    end_date: '2025-05-05',
    questions: [
      {
        text: '¿Aprobar al candidato para secretario de la junta?',
        options: ['Sí', 'No'],
      },
    ],
  },
  {
    id: 3,
    title: 'Elección de tesorero de la junta de administración',
    start_date: '2025-05-02',
    end_date: '2025-05-15',
    questions: [
      {
        text: '¿Quién debe ser el nuevo tesorero de la junta?',
        options: ['Pedro Sánchez', 'María López', 'José Ramírez'],
      },
    ],
  },
];

export default {
  async getActiveSessions() {
    return new Promise((resolve) => {
      setTimeout(() => resolve(mockSessions), 300);
    });
  },

  async submitVote(payload) {
    console.log('Voto recibido en servicio:', payload);
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ success: true, message: 'Voto registrado correctamente' });
      }, 500);
    });
  },
};
