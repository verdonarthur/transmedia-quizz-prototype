<template>
  <Question
    :title=" $t('question-1.title') "
    :subtitle=" $t('question-1.subtitle') "
    :answers="answers"
    id="1"
    nextQuestion="/questions/2"
  ></Question>
</template>

<style lang="scss">
</style>

<script>
import Question from '../components/Question'

export default {
  name: 'question-1',
  components: { Question },
  data () {
    return {
      answers: this.$i18n.t('question-1.answers')
    }
  },
  mounted () {},
  methods: {},
  watch: {}
}
</script>
