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
  name: 'NotFoundView',
};
</script>

<style scoped lang="scss">
.not-found {
  padding: 3rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  background-color: #f8f9fa;

  .container {
    max-width: 600px;
    text-align: center;
  }

  h1 {
    font-size: 5rem;
    font-weight: bold;
    color: #343a40;
  }

  .lead {
    font-size: 1.25rem;
    margin-bottom: 1rem;
    color: #6c757d;
  }

  p {
    color: #6c757d;
  }

  .btn {
    margin-top: 1rem;
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
    border-radius: 0.3rem;
    background-color: #2b0a41;
    color: white;
    border: none;
    text-decoration: none;
  }

  .btn:hover {
    background-color: #3c0d5c;
  }
}
</style>
