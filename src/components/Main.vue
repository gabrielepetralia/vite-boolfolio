<script>
export default {
  name: "Main"
}
</script>

<template>
  <main>
    <h1 class="p-5">Main</h1>
  </main>
</template>

<style lang="scss" scoped>
@use "../scss/partials/variables" as *;

  main {
    min-height: calc(100vh - 75px);
    background-color: $dark_white;
    margin-top: 75px;
  }
</style>