<template>
  <div class="container" id="Home">
    <h1 class="title">{{ $t("home.welcome") }}</h1>
    <h2 class="subtitle">{{ $t("home.subtitle") }}</h2>
    <router-link to="/questions/1" class="button">{{ $t("home.begin") }}</router-link>
  </div>
</template>

<style lang="scss">
#Home {
  text-align: center;
  padding-top: 20%;
}
</style>

<script>
export default {
  name: 'home'
}
</script>
