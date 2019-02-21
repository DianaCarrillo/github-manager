<template>
  <div>
    <button id="btn-remove"  @click="removeReaction">Click to remove HOORAY</button>
  </div>
</template>

<script>
import gql from 'graphql-tag'

const addReactionIssue = gql`
  mutation AddReactionToIssue($input: AddReactionInput!) {
    addReaction(input: $input) {
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
    addReaction: function() {
      this.$apollo.mutate({
        mutation: addReactionIssue,
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
#btn-remove{
  padding: 10px;
  margin: 1%;
  color: white;
  background-color:red;
  border-color: red
}
</style>
