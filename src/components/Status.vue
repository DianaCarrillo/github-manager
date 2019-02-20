<template>
  <div>
    <p> {{ user.status.message }}</p>
  </div>
</template>

<script>
export default {
  name: 'Status',
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
}
</script>
