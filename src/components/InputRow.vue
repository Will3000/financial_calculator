<template>
  <b-row class="my-1">
    <b-col lg="6"><label :for="`input-${data.name}`">{{data.title }}:</label></b-col>
    <b-col lg="6">
      <b-form-input :id="`input-${data.name}`" 
                    :state="state"
                    v-on:change="handleChange"
                    type="text"></b-form-input>
    </b-col>
  </b-row>
</template>

<script>

import { validate } from '../libs/validate'
export default {
  name: 'InputRow',
  props: {
    data: Object
  },
  computed: {
    inputState () {
      if (this.data.value===2) return true;
    }
  },
  data () {
    return {
      value: null,
      state: null
    }
  },
  methods: {
    handleChange: function(value) {
      let isPercentage = false;
      switch(this.data.name) {
        case "avgRetirementTaxRate":
        case "currMarginalTaxRate":
        case "inflationRate":
        case "returnOnInvestment":
          isPercentage = true
      }

      if (validate(value, isPercentage)) {
        this.state = true
        this.value = value
      } else {
        this.state = false
        value = null
      }

      if (isPercentage) value = value/100
      this.$emit('changed', {
        id: this.data.id,
        name: this.data.name,
        value
      })
    }
  }
}
</script>

<style scoped>
.row {
  /*height: 56px;*/
}
label {
  font-weight: 800;
  font-family: "Raleway",sans-serif;
  color: #00b6de;
}
</style>
