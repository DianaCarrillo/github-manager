/* eslint-disable no-labels */
<template>
  <section id="user-section">
    <div class="user">
      <img :src="user.avatarUrl" alt="" width="350" height="370px" />
      <p>{{ user.status && user.status.message }}</p>
    </div>

    <p id="userName"> {{ user.name }}</p>
    <p id="userEmail"> {{ user.email }}</p>
    <p> Bio: {{ user.bio }}</p>
  </section>
</template>

<script>
import gql from 'graphql-tag'

export default {
  name: 'UserInfo',
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
#user-section {
  position: relative;
  top: 30px;
  left: 100px;
}

#userName {
  font-size: 30px;
}
.user {
  border: black;
}
</style>
