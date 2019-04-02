<template>
  <Question
    :title=" $t('question-2.title') "
    :subtitle=" $t('question-2.subtitle') "
    :answers="answers"
    id="2"
    nextQuestion="/results"
  ></Question>
</template>

<style lang="scss">
</style>

<script>
import Question from "../components/Question";

export default {
  name: "question-2",
  components: { Question },
  data() {
    return {
      answers: this.$i18n.t("question-2.answers")
    };
  },
  mounted() {},
  methods: {},
  watch: {}
};
</script>
