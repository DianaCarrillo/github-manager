<template>
  <div>
    <i
      :id="repository.node.id"
      class="far fa-star"
      @click="addStarMethods($event)"
    ></i>
  </div>
</template>

<script>
import gql from 'graphql-tag'

const addStar = gql`
  mutation addStar($input: AddStarInput!) {
    addStar(input: $input) {
      starrable {
        id
      }
    }
  }
`
export default {
  name: 'Star',
  props: {
    repository: {
      type: Object,
      required: true,
    },
  },
  methods: {
    clickEventId: function(event) {
      document.getElementById(this.repository.node.id).style.color = 'blue'
    },
    addStar: function(event) {
      this.$apollo.mutate({
        mutation: addStar,
        variables: {
          input: { starrableId: event.target.id },
        },
      })
    },
    addStarMethods: function(event) {
      this.clickEventId(event)
      this.addStar(event)
    },
  },
}
</script>

<style>
.far {
  position: relative;
  top: 20px;
}

.color-changer {
  color: blue;
}
</style>
