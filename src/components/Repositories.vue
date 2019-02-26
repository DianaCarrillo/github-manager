<template>
  <div id="repos">
    <h5>Last 3 repositories</h5>
    <EachRepository
      v-for="repository in user.repositories && user.repositories.edges"
      :key="repository.id"
      :repository="repository"
    />
  </div>
</template>

<script>
import gql from 'graphql-tag'
import EachRepository from './EachRepository.vue'
export default {
  name: 'Repositories',
  components: {
    EachRepository,
  },
  data() {
    return {
      user: {},
    }
  },
  apollo: {
    user: {
      query: gql`
        query user($login: String!) {
          user(login: $login) {
            repositories(last: 3) {
              edges {
                node {
                  name
                  id
                }
              }
            }
          }
        }
      `,
      variables() {
        return {
          login: 'DianaCarrillo',
        }
      },
    },
  },
}
</script>

<style>
#repos {
  position: relative;
  bottom: 500px;
  left: 500px;
}
</style>
