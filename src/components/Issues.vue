<template>
  <div id="issues-list">
    <section id="select-issue">
      <SelectIssue :user="user" />
    </section>
    <div v-for="iss in user.issues.edges" :key="iss.id">
      <EachIssue :iss="iss" />
    </div>
  </div>
</template>

<script>
import EachIssue from './EachIssue.vue'
import SelectIssue from './SelectIssue.vue'
export default {
  name: 'Issues',
  components: {
    EachIssue,
    SelectIssue,
  },
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      repository: {},
      issue: '',
    }
  },
}
</script>

<style>
#select-issue {
  position: relative;
  /* top: -100px; */
  left: 350px;
  text-align: center;
  border-color: black;
}
</style>
