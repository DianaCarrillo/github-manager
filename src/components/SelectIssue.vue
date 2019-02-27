<template>
  <div>
    <p id="issueP">Issue # </p>
    <select id="selectid" v-model="selected">
      <option
        v-for="i in user.issues && user.issues.edges"
        :key="i.id"
        :value="i.node"
        >{{ i.node.number }}</option
      >
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

<style>
#selectid {
  padding-right: 10px;
  padding-left: 10px;
}
#issueP {
  display: inline-block;
  margin-right: 10px;
}
</style>
