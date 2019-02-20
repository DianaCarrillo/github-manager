<template>
  <div>
    <section id="select-issue">
       <SelectIssue :user="user" />
    </section>

    <p>Issues:</p>
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
#select-issue{
text-align: center;
position: relative;
top:-400px;
}
</style>
