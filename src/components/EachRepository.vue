<template>
  <div>
    <ul>
      <li class="repoLi">
        {{ repository.node.name }}
        <p>
          <i
            :id="repository.node.id"
            class="far fa-star"
            @click="addStarMethods(repository.node.id)"
          ></i>
          <button
            :id="repository.node.id"
            class="unstar"
            @click="unstar(repository.node.id)"
            >unstar</button
          >
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
import gql from 'graphql-tag'

const unstar = gql`
  mutation removeStar($input: RemoveStarInput!) {
    removeStar(input: $input) {
      starrable {
        id
      }
    }
  }
`
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
  name: 'EachRepository',
  props: {
    repository: {
      type: Object,
      required: true,
    },
  },
  methods: {
    unstar: function(id) {
      this.$apollo.mutate({
        mutation: unstar,
        variables: {
          input: { starrableId: id },
        },
      })
    },
    addStar: function(id) {
      this.$apollo.mutate({
        mutation: addStar,
        variables: {
          input: { starrableId: id },
        },
      })
    },
    clickEventId: function(id) {
      document.getElementById(this.repository.node.id).style.color = 'blue'
    },
    addStarMethods: function(id) {
      this.clickEventId(id)
      this.addStar(id)
    },
  },
}
</script>

<style>
.repoLi {
  width: 398px;
  padding: 20px;
  margin-top: 30px;
  list-style: none;
  border: solid thin;
  border-color: rgb(232, 234, 236);
}
.far {
  position: relative;
  top: 20px;
}

.colorChanger {
  color: blue;
}
.unstar {
  position: relative;
  left: 250px;
  background-color: rgb(255, 255, 255);
  border-color: gray;
  border-width: thin;
}
</style>
