<template>
  <div>
    <p> REPOSITORY: </p>
       <p>Issue # </p>
    <select v-model="selected">
      <option v-for="i in user.issues.edges" :key="i.id" :value="i.node">{{
        i.node.number
      }}</option>
    </select>
    <IssueSelectedInfo :selected="selected" />
  </div>
</template>

<script>
import IssueSelectedInfo from './IssueSelectedInfo'
export default {
  name: 'SelectIssue',
  components: {
    IssueSelectedInfo,
  },
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      selected: {},
    }
  },
}
</script>
