<template>
  <div v-if="items.length > 0">
    <h2>Results</h2>
    <b-table striped hover :items="items"></b-table>
  </div>
</template>

<script>
export default {
  name: 'Results',
  props: {
    items: Array
  }
}
</script>

<style scoped>

</style>

