<template>
  <div>
    <section id="select-issue">
      <SelectIssue :user="user" />
    </section>
    <div v-for="iss in user.issues && user.issues.edges" :key="iss.id">
      <EachIssue :iss="iss" />
    </div>
  </div>
</template>

<script>
import gql from 'graphql-tag'
import EachIssue from './EachIssue.vue'
import SelectIssue from './SelectIssue.vue'
export default {
  name: 'Issues',
  components: {
    EachIssue,
    SelectIssue,
  },
  data() {
    return {
      repository: {},
      user: {},
    }
  },
  apollo: {
    user: {
      query: gql`
        query user($login: String!) {
          user(login: $login) {
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
#select-issue {
  left: 10px;
  text-align: center;
  border-color: black;
}
</style>
