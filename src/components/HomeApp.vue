<template>
  <div>
    <Navbar />
    <template if="user">
      <UserInfo />
      <Repositories />
      <Issues />
    </template>
  </div>
</template>

<script>
import UserInfo from './UserInfo.vue'
import Navbar from './Navbar.vue'
import Issues from './Issues.vue'
import Repositories from './Repositories.vue'
export default {
  name: 'HomeApp',
  components: {
    UserInfo,
    Issues,
    Repositories,
    Navbar,
  },
}
</script>
