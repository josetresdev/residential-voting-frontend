<template>
  <div>
    <h2>Sesiones de votación activas</h2>
    <ul>
      <li v-for="session in sessions" :key="session.id">
        {{ session.title }}
        <router-link :to="`/client/vote/${session.id}`">Votar</router-link>
      </li>
    </ul>
    <p v-if="error" style="color: red">
      {{ error }}
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sessions: [],
      error: null, // Variable para manejar errores
    };
  },
  async created() {
    try {
      const res = await fetch('/api/voting-sessions');

      if (!res.ok) {
        throw new Error('Error al cargar las sesiones de votación');
      }

      const data = await res.json(); // Intentar convertir la respuesta a JSON

      // Verificar si la respuesta tiene el formato esperado
      if (Array.isArray(data)) {
        this.sessions = data;
      } else {
        throw new Error('La respuesta no tiene el formato esperado');
      }
    } catch (err) {
      this.error = err.message; // Mostrar el error si algo sale mal
      console.error('Error fetching sessions:', err);
    }
  },
};
</script>

<style scoped>
/* Estilos opcionales */
</style>
