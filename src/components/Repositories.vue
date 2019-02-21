<template>
  <div id="repos">
    <h5>Last 3 repositories</h5>
    <EachRepository
      v-for="repository in user.repositories.edges"
      :key="repository.id"
      :repository="repository"
    />
  </div>
</template>

<script>
import EachRepository from './EachRepository.vue'
export default {
  name: 'Repositories',
  components: {
    EachRepository,
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
#repos {
  position: relative;
  bottom: 500px;
  left: 500px;
}
</style>
