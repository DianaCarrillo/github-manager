<template>
  <section id="user-section">
    <img :src="user.avatarUrl" alt="" width="250" />
    <p id="userName"> {{ user.name }}</p>
    <p id="userName"> {{ user.email }}</p>

    <p> Bio: {{ user.bio }}</p>
  </section>
</template>

<script>
export default {
  name: 'User',
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style>
#user-section{
  /* text-align: center */
}
</style>
