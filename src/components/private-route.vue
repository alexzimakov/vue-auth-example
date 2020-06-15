<template>
  <div><slot></slot></div>
</template>

<script>
export default {
  name: 'private-route',
  beforeMount() {
    const { $store, $router } = this;

    if ($store.state.authorizedUserId == null) {
      $router.push('/login');
    }
  },
};
</script>

<style scoped></style>
