export default {
  async getQuestion(id) {
    try {
      const res = await fetch(`/api/questions/${id}`);
      if (!res.ok) throw new Error('Error al obtener la pregunta');
      return await res.json();
    } catch (error) {
      console.error('Error en getQuestion:', error);
      return null;
    }
  },

  async vote(optionId) {
    try {
      const res = await fetch('/api/votes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ option_id: optionId }),
      });
      if (!res.ok) throw new Error('Error al votar');
      return { success: true, message: 'Voto registrado' };
    } catch (error) {
      console.error('Error en vote:', error);
      return { success: false, message: 'No se pudo registrar el voto' };
    }
  },
};
