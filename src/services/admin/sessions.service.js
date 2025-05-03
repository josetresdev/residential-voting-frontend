const mockSessions = [
  { id: 1, title: 'Votación sobre el proyecto de ley A' },
  { id: 2, title: 'Votación sobre el presupuesto de la comunidad' },
  { id: 3, title: 'Votación sobre el nuevo parque local' },
  { id: 4, title: 'Votación sobre la mejora de servicios de transporte' },
  { id: 5, title: 'Votación sobre la creación de un centro cultural' },
];

export default {
  getSessions() {
    return Promise.resolve([...mockSessions]);
  },
};
