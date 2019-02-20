<template>
  <div>
    <p>Selected Issue: {{ selected.number }}</p>
    <p>Title: {{ selected.title }}</p>
    <ReactionButton :selected="selected" />
    <RemoveButton :selected="selected" />
  </div>
</template>

<script>
import ReactionButton from './ReactionButton.vue'
import RemoveButton from './RemoveButton.vue'
export default {
  name: 'IssueSelectedInfo',
  components: {
    ReactionButton,
    RemoveButton,
  },
  props: {
    selected: {
      type: Object,
      required: true,
    },
  },
}
</script>
