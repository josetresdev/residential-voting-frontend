<template>
  <div class="home">
    <div class="container">
      <div class="card">
        <div class="card-header">
          <i class="fas fa-house me-2"></i>
          Sistema de votaciones residencial
        </div>
        <div class="card-body">
          <h2 class="section-title">Bienvenido al proyecto</h2>
          <p class="text-muted">
            Sistema de votación web orientado a conjuntos residenciales. Permite
            crear preguntas y opciones de votación, gestionar votos de manera
            segura y mostrar resultados en tiempo real.
          </p>
          <p class="text-muted">
            Desarrollado con <strong>Laravel 11</strong> y
            <strong>Vue.js</strong>, ofrece una solución moderna, escalable y
            fácil de usar para facilitar la participación activa de los
            propietarios en las decisiones comunitarias.
          </p>

          <h2 class="section-title">Características principales</h2>
          <p class="text-muted">
            <strong>Gestión de usuarios:</strong> Registro y autenticación de
            propietarios.
          </p>
          <p class="text-muted">
            <strong>Administración de votaciones:</strong> Creación de preguntas
            y opciones.
          </p>
          <p class="text-muted">
            <strong>Votación segura:</strong> Emisión de votos con control de
            acceso.
          </p>
          <p class="text-muted">
            <strong>Resultados en tiempo real:</strong> Visualización inmediata
            de los votos.
          </p>
          <p class="text-muted">
            <strong>Panel administrativo:</strong> Gestión centralizada de
            usuarios y votaciones.
          </p>

          <div class="text-center mt-4">
            <router-link to="/login" class="btn btn-primary">
              Ir al sistema de votaciones
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
};
</script>

<style scoped lang="scss">
.home {
  margin-top: 3rem;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.card {
  width: 100%;
  max-width: 700px; /* Card mucho más ancho */
  border-radius: 14px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1); /* Sombra más suave */
  border: none;
}

.card-header {
  background-color: #2b0a41;
  color: #ffffff;
  text-align: center;
  font-size: 1.5rem; /* Tamaño de fuente ajustado */
  font-weight: 600;
  padding: 1rem;
  border-radius: 14px 14px 0 0;
}

.card-body {
  padding: 2rem; /* Más espacio para el contenido */
  background-color: #ffffff;
}

.section-title {
  font-size: 1.125rem; /* Tamaño de fuente ajustado */
  font-weight: 600;
  color: #2b0a41;
  margin-bottom: 1rem;
  border-bottom: 2px solid #c9c3ff;
  padding-bottom: 0.5rem;
}

.text-muted {
  font-size: 0.875rem; /* Fuente más pequeña */
  margin-bottom: 1.5rem;
  color: #6c757d;
}

.btn {
  font-size: 0.875rem; /* Tamaño de fuente ajustado */
  padding: 0.6rem 1.2rem; /* Botón con tamaño ajustado */
  border-radius: 8px;
  text-decoration: none;
  display: inline-block;
  width: 100%;
  max-width: 320px; /* Ancho ajustado */
}

.btn-primary {
  background-color: #2b0a41;
  border-color: #2b0a41;
  color: #ffffff;
}

.btn-primary:hover {
  background-color: #856ca0;
  border-color: #856ca0;
}

.mb-3 {
  margin-bottom: 0.75rem; /* Espaciado ajustado */
}
</style>
