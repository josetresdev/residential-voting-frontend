const mockSessions = [
  { id: 5, title: 'Sesión de Votación Presidencial 2025' },
  { id: 2, title: 'Proyecto de mantenimiento' },
  { id: 3, title: 'Modificación del reglamento interno' },
  { id: 4, title: 'Junta administrativa del condominio' },
];

export default {
  getSessions() {
    return Promise.resolve([...mockSessions]);
  },
};
