<template>
  <div>
    <ul>
      <li class="repo-li">
        {{ repository.node.name }}
        <Star :repository="repository"/>
      </li>
    </ul>
  </div>
</template>

<script>
import Star from './Star.vue'

export default {
  name: 'EachRepository',
    components: {
    Star
  },
  props: {
    repository: {
      type: Object,
      required: true,
    },
  }
}
</script>

<style>
.repo-li {
  width: 398px;
  padding: 30px;
  margin-top: 30px;
  border: solid thin;
  border-color: rgb(232, 234, 236);
}

</style>
