<template>
  <div class="client-dashboard">
    <div class="container">
      <div class="card">
        <div class="card-header">
          <i class="fas fa-vote-yea me-2"></i>
          Panel de votación
        </div>
        <div class="card-body">
          <h2 class="section-title">Bienvenido al sistema de votación</h2>
          <p class="text-muted">
            Elige una opción para votar o consulta los resultados de las
            votaciones activas.
          </p>

          <div class="action-buttons">
            <router-link to="/client/sessions" class="btn btn-primary">
              Votar
            </router-link>
            <router-link to="/client/results" class="btn btn-secondary">
              Ver resultados
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ClientDashboard',
};
</script>

<style scoped lang="scss">
.client-dashboard {
  margin-top: 3rem;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 85vh;
}

.card {
  width: 100%;
  max-width: 500px;
  border-radius: 18px;
  box-shadow: 0 10px 35px rgba(0, 0, 0, 0.2);
  border: none;
}

.card-header {
  background-color: #2b0a41;
  color: #ffffff;
  text-align: center;
  font-size: 1.6rem;
  font-weight: 600;
  padding: 1.2rem;
  border-radius: 18px 18px 0 0;
}

.card-body {
  padding: 2.5rem;
  background-color: #ffffff;
  text-align: center;
}

.section-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2b0a41;
  margin-bottom: 1.5rem;
  border-bottom: 3px solid #c9c3ff;
  padding-bottom: 0.75rem;
}

.text-muted {
  font-size: 1rem;
  color: #6c757d;
  margin-bottom: 2rem;
  line-height: 1.6;
}

.action-buttons {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  justify-content: center;
  align-items: center;
}

.btn {
  font-size: 1.15rem;
  padding: 0.9rem 1.6rem;
  border-radius: 12px;
  text-decoration: none;
  display: inline-block;
  width: 100%;
  max-width: 360px;
  transition: background-color 0.3s ease, transform 0.3s ease,
    box-shadow 0.3s ease;
}

.btn-primary {
  background-color: #2b0a41;
  border-color: #2b0a41;
  color: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.btn-primary:hover {
  background-color: #856ca0;
  border-color: #856ca0;
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
}

.btn-secondary {
  background-color: #6c757d;
  border-color: #6c757d;
  color: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.btn-secondary:hover {
  background-color: #5a6268;
  border-color: #545b62;
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
}
</style>
