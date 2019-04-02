<template>
  <div class="container question">
    <h1 class="title">{{ title }}</h1>
    <h2 class="subtitle">{{ subtitle }}</h2>
    <div class="block">
      <b-radio
        size="is-medium"
        v-model="answerData"
        :native-value="answer"
        v-for="answer in answers"
        :key="answer"
      >{{ answer }}</b-radio>
    </div>

    <a class="button" v-on:click="next">{{ $t("global.next") }}</a>
  </div>
</template>

<style lang="scss">
.question {
  text-align: center;
  padding-top: 20%;
}
</style>

<script>
import QuizzStorage from '../utils/QuizzStorage'

export default {
  name: 'question',
  props: ['id', 'title', 'subtitle', 'answers', 'nextQuestion'],
  data () {
    return {
      answerData: this.answers[0] ? this.answers[0] : null,
      quizzStorage: {}
    }
  },
  mounted () {
    this.quizzStorage = QuizzStorage.initQuizzStoage()
    this.quizzStorage.saveResults(this.id, this.answerData)
  },
  methods: {
    next () {
      this.quizzStorage.save()
      this.$router.push(this.nextQuestion)
    }
  },
  watch: {
    answerData (newAnswer) {
      this.quizzStorage.saveResults(1, newAnswer)
    }
  }
}
</script>
