<template>
  <div>
    <Navbar />
    <template if="user">
      <Home :user="user" />
      <Repositories :user="user" />
      <Issues :user="user" />
    </template>
  </div>
</template>

<script>
import gql from 'graphql-tag'
import Home from '../src/components/Home.vue'
import Navbar from '../src/components/Navbar.vue'
import Issues from '../src/components/Issues.vue'
import Repositories from '../src/components/Repositories.vue'
export default {
  name: 'App',
  components: {
    Home,
    Issues,
    Repositories,
    Navbar,
  },
  data() {
    return {
      userName: 'DianaCarrillo',
      user: {},
    }
  },
  apollo: {
    user: {
      query: gql`
        query user($login: String!) {
          user(login: $login) {
            avatarUrl
            bio
            name
            email
            repositories(last: 3) {
              edges {
                node {
                  name
                  id
                }
              }
            }
            status {
              id
              message
            }
            issues(first: 5) {
              edges {
                node {
                  id
                  body
                  title
                  state
                  number
                  author {
                    avatarUrl
                    login
                  }
                  reactions(first: 1) {
                    edges {
                      node {
                        content
                      }
                    }
                  }
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
#app {
  padding-bottom: 60px;
  margin-left: 70px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #2c3e50;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
#userName {
  font-weight: bold;
}
</style>
