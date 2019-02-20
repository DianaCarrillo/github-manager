<template>
  <div>
    <p> REPOSITORY: {{ repository.name }}</p>
    <p>Issues:</p>
    <div v-for="iss in user.issues.edges" :key="iss.id">
      <EachIssue :iss="iss" />
    </div>
    <p>Issue # </p>
    <SelectIssue :user="user" />
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
