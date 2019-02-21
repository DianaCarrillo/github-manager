<template>
  <div>
    <p> <b>Selected Issue:</b>  {{ selected.number }}</p>
    <p> <b>Title:</b>  {{ selected.title }}</p>
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
