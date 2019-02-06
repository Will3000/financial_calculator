<template>
  <div v-if="items.length > 0">
    <h2>Results</h2>
    <b-table striped hover :fields="fields" :items="items"></b-table>
  </div>
</template>

<script>
export default {
  name: 'Results',
  props: {
    items: Array
  },
  data () {
    return {
      fields: [
        'name',
        {
          key: 'TFSA',
          formatter: 'round'
        },
        {
          key: 'RRSP',
          formatter: 'round'
        },
      ]
    }
  },
  methods: {
    round (value) {
      let val = Math.round(value)
      if ( isNaN(val) ) {
        return value
      } else {
        return val
      }
    }
  }
}
</script>

<style scoped>

</style>

