<template>
  <User :user="user" />
</template>

<script>
import User from './User.vue'
export default {
  name: 'Home',
  components: {
    User,
  },
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
}
</script>
