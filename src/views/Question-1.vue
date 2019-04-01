<template>
  <div class="container" id="Question-1">
    <h1 class="title">{{ $t("question-1.title") }}</h1>
    <router-link to="/questions/2" class="button">{{ $t("global.next") }}</router-link>
  </div>
</template>

<style lang="scss">
#Question-1 {
  text-align: center;
  padding-top: 20%;
}
</style>

<script>

export default {
  name: "question-1"
};
</script>
