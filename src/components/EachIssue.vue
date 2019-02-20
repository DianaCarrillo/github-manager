<template>
  <div>
    <ul id="issues-list">
      <li>
        <p id="issue"> Issue #{{ iss.node.number }}</p>
        <p>{{ iss.node.title }}</p>
        <p>{{ iss.node.state }}</p>
        <p v-for="node in iss.node.reactions.edges" :key="node.id">
          Reactions: {{ node.node.content }}</p
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'EachIssue',
  props: {
    iss: {
      type: Object,
      required: true,
    },
  },
}
</script>
<style>
#issue {
  font-weight: bolder;
}
</style>
