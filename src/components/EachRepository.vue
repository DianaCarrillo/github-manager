<template>
  <div>
    <ul>
      <li class="repo-li">
        {{ repository.node.name }}
        {{ repository.node.id }}

        <p>
          <i
            :id="repository.node.id"
            class="far fa-star"
            @click="addStarMethods($event)"
          ></i>
        </p>
      </li>
    </ul>
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
  name: 'EachRepository',
  props: {
    repository: {
      type: Object,
      required: true,
    },
  },
  methods: {
    clickEvent: function(e) {
      console.log(e)
    },
    addStar: function() {
      this.$apollo.mutate({
        mutation: addStar,
        variables: {
          input: { starrableId: 'MDEwOlJlcG9zaXRvcnkxNzA3MTkxNzg=' },
        },
      })
    },
    addStarMethods: function() {
      this.clickEvent()
      this.addStar()
    },
  },
  // apollo: {
  //   repository: {
  //     query: gql`
  //       query FindRepositoriesID($owner: String!, $name: String!) {
  //         repositories(last:3) {
  //           }
  //           name
  //           id
  //         }
  //       }
  //     `,
  //     variables() {
  //       return {
  //         owner: 'DianaCarrillo',
  //         name: 'cdmx-2018-01-FE-markdown',
  //         number: this.selected.number,
  //       }
  //     },
  //   },
  // },
}
</script>

<style>
.repo-li {
  width: 398px;
  padding: 30px;
  margin-top: 30px;
  border: solid thin;
  border-color: rgb(232, 234, 236);
}
.far {
  position: relative;
  top: 20px;
}
</style>
