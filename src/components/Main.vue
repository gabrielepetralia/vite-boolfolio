<script>
export default {
  name: "Main"
}
</script>

<template>
  <main>
    <router-view></router-view>
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