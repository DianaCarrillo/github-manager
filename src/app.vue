<template>
  <div id="app">
    <template if="user">
      <h2 id="title">Github manager</h2>
      <User :user="user" />
      <Issues :user="user" />
    </template>
  </div>
</template>

<script>
import gql from 'graphql-tag'
import User from '../src/components/User.vue'
import Issues from '../src/components/Issues.vue'

export default {
  name: 'App',
  components: {
    User,
    Issues,
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
                  repository
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
  margin-top: 60px;
  margin-left: 30px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #2c3e50;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
#userName {
  font-weight: bold;
}
#title {
  margin-bottom: 30px;
  text-align: center;
}
</style>
