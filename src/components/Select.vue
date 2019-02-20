<template>
  <select id="" name="">
    <option
      v-for="country in continent.countries"
      :key="country.id"
      value="`${country.name}`"
      >{{ country.native }}</option
    >
  </select>
</template>

<script>
export default {
  name: 'Select',
  props: {
    continent: {
      type: Object,
      required: true,
    },
  },
}
</script>
