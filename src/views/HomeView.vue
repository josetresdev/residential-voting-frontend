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
          <p>
            Sistema de votación web orientado a conjuntos residenciales. Permite
            crear preguntas y opciones de votación, gestionar votos de manera
            segura y mostrar resultados en tiempo real.
          </p>
          <p>
            Desarrollado con <strong>Laravel 11</strong> y
            <strong>Vue.js</strong>, ofrece una solución moderna, escalable y
            fácil de usar para facilitar la participación activa de los
            propietarios en las decisiones comunitarias.
          </p>

          <h2 class="section-title">Características principales</h2>
          <ul>
            <li>
              <strong>Gestión de usuarios:</strong> Registro y autenticación de
              propietarios.
            </li>
            <li>
              <strong>Administración de votaciones:</strong> Creación de
              preguntas y opciones.
            </li>
            <li>
              <strong>Votación segura:</strong> Emisión de votos con control de
              acceso.
            </li>
            <li>
              <strong>Resultados en tiempo real:</strong> Visualización
              inmediata de los votos.
            </li>
            <li>
              <strong>Panel administrativo:</strong> Gestión centralizada de
              usuarios y votaciones.
            </li>
          </ul>

          <div class="text-center mt-5">
            <a href="{{ url('/votaciones') }}" class="btn btn-primary">
              <i class="fas fa-right-to-bracket"></i> Ir al sistema de votación
            </a>
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

<!-- Importar el archivo de estilos externo -->
<style scoped lang="scss">
@import '@/assets/styles/Home';
</style>
