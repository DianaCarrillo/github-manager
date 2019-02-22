<template>
  <section id="user-section">
    <div class="user">
      <img :src="user.avatarUrl" alt="" width="350" height="370px" />
      <Status :user="user" />
    </div>

    <p id="userName"> {{ user.name }}</p>
    <p id="userEmail"> {{ user.email }}</p>

    <p> Bio: {{ user.bio }}</p>
  </section>
</template>

<script>
import Status from './Status.vue'
export default {
  name: 'User',
  components: {
    Status,
  },
  props: {
    user: {
      type: Object,
      required: true,
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
