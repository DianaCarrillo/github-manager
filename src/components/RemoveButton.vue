<template>
  <div>
    <button id="btn-remove" type="submit" @click="removeReaction"
      >Click to remove HOORAY</button
    >
  </div>
</template>

<script>
import gql from 'graphql-tag'

const removeReactionIssue = gql`
  mutation removeReactionToIssue($input: RemoveReactionInput!) {
    removeReaction(input: $input) {
      reaction {
        id
        content
      }
      subject {
        id
      }
    }
  }
`
export default {
  name: 'RemoveButton',
  props: {
    selected: {
      type: Object,
      required: true,
    },
  },

  methods: {
    removeReaction: function() {
      location.reload();
      this.$apollo.mutate({
        mutation: removeReactionIssue,
        variables: {
          input: { subjectId: this.selected.id, content: 'HOORAY' },
        },
      })
    },
  },

  apollo: {
    repository: {
      query: gql`
        query FindIssueID($owner: String!, $name: String!, $number: Int!) {
          repository(owner: $owner, name: $name) {
            issue(number: $number) {
              __typename
              title
              id
              body
            }
            name
          }
        }
      `,
      variables() {
        return {
          owner: 'DianaCarrillo',
          name: 'cdmx-2018-01-FE-markdown',
          number: this.selected.number,
        }
      },
    },
  },
}
</script>

<style>
#btn-remove {
  padding: 10px;
  margin: 1%;
  color: black;
  background-color: rgb(219, 237, 255);
  border-color: rgb(219, 237, 255);
}
</style>
