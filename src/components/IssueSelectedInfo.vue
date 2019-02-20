<template>
  <div>
    <p>Selected Issue: {{ selected.number }}</p>
    <p>TITLE: {{ selected.title }}</p>
    <ReactionButton :selected="selected" />
  </div>
</template>

<script>
import ReactionButton from './ReactionButton'
export default {
  name: 'IssueSelectedInfo',
  components: {
    ReactionButton,
  },
  props: {
    selected: {
      type: Object,
      required: true,
    },
  },
}
</script>
