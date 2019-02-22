<template>
  <div>
    <button :id="repository.node.id"
            class="unstar"
             @click="unstarMethods($event)"
      >unstar</button>
  </div>
</template>

<script>
import gql from 'graphql-tag'

const unstar = gql`
mutation removeStar ($input: RemoveStarInput!) {
  removeStar(input: $input){
    starrable{
      id
    }
  }
}
`
export default {
  name: 'Unstar',
  props: {
    repository: {
      type: Object,
      required: true,
    },
  },
  methods: {
    unstarMethods: function(){
      this.$apollo.mutate({
        mutation: unstar,
        variables: {
          input: { starrableId: event.target.id },
        },
      })
    }
  }
}
</script>

<style>
.unstar{
  position: relative;
  left: 250px;
  background-color: rgb(255, 255, 255);
  border-color: gray;
  border-width: thin
  /* border: thin; */
}
</style>
