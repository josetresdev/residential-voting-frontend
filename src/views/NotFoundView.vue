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
@import '@/assets/styles/NotFound.scss';
</style>
