<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <a class="navbar-brand" href="#">Sistema de Votaciones</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" href="#">Inicio</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Votar</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Resultados</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Administrar</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'AppNavbar', // Cambiado a nombre multi-palabra
};
</script>

<style scoped lang="scss">
.navbar {
  margin-bottom: 1rem;
}

.navbar-brand {
  font-weight: bold;
}

.nav-link {
  color: #495057;
}

.nav-link:hover {
  color: #007bff;
}
</style>
