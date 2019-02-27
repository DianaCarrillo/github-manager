<template>
  <div>
    <ul>
      <li class="repoLi">
        {{ repository.node.name }}
        <p>
          <Star :repository="repository" />
          <Unstar :repository="repository" />
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
import Star from './Star.vue'
import Unstar from './UnStar.vue'

export default {
  name: 'EachRepository',
  components: {
    Star,
    Unstar,
  },
  props: {
    repository: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style>
.repoLi {
  width: 398px;
  padding: 20px;
  margin-top: 30px;
  list-style: none;
  border: solid thin;
  border-color: rgb(232, 234, 236);
}
</style>
