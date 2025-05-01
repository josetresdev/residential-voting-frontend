<template>
  <div class="not-found">
    <div class="container text-center">
      <h1 class="display-4">404</h1>
      <p class="lead">Página no encontrada</p>
      <p>
        Lo sentimos, la página que buscas no existe o ha sido movida. Verifica
        la URL o regresa al inicio.
      </p>
      <div class="mt-4">
        <router-link to="/" class="btn btn-primary">
          Volver al inicio
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NotFoundView', // Componente para la página de error 404
};
</script>

<style scoped lang="scss">
.not-found {
  padding: 3rem 0;
}

.not-found .container {
  max-width: 600px;
}

.not-found h1 {
  font-size: 5rem;
  font-weight: bold;
}

.not-found .lead {
  font-size: 1.25rem;
}

.not-found .btn {
  margin-top: 1rem;
}
</style>
