<template>
  <div>
    <Navbar />
    <template if="user">
      <UserInfo :user="user" />
      <Repositories :user="user" />
      <Issues :user="user" />
    </template>
  </div>
</template>

<script>
import gql from 'graphql-tag'
import UserInfo from './UserInfo.vue'
import Navbar from './Navbar.vue'
import Issues from './Issues.vue'
import Repositories from './Repositories.vue'
export default {
  name: 'GithubApp',
  components: {
    UserInfo,
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
            repositories(last: 5) {
              edges {
                node {
                  name
                  id
                  # stargazers {
                  #   edges {
                  #     node {
                  #       starredRepositories {
                  #         edges {
                  #           node {
                  #             stargazers {
                  #               totalCount
                  #             }
                  #           }
                  #         }
                  #       }
                  #     }
                  #   }
                  # }
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
