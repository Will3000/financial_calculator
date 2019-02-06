<template>
  <b-container fluid>
    <InputRow v-for="input in inputs" :data="input" @changed="onInputChange"></InputRow>
    <b-button class="calculate-btn" @click="onSubmit" size="lg" variant="primary">Calculate</b-button>
    <b-modal v-model="modalShow">
      Please fill in all the inputs with valid number
    </b-modal>
  </b-container>
</template>

<script>
import InputRow from './InputRow.vue'
export default {
  components: {
    InputRow
  },
  computed: {
    inputState () {
      return false
    }
  },
  data () {
    return {
      inputs: [
        { id: 1, title: 'Current Marginal Tax Rate(%)', name: 'currMarginalTaxRate'},
        { id: 2, title: 'Average Tax Rate in Retirement(%)', name: 'avgRetirementTaxRate'},
        { id: 3, title: 'Amount of Deposit', name: 'amountOfDeposit'},
        { id: 4, title: 'Years Invested', name: 'yearsInvested'},
        { id: 5, title: 'Return on Investment(%)', name: 'returnOnInvestment'},
        { id: 6, title: 'Inflation Rate(%)', name: 'inflationRate'},
      ],
      inputValues: {},
      modalShow: false
    }
  },
  methods: {
    onInputChange(input) {
      this.inputValues[input.name] = input.value
    },
    onSubmit (evt) {
      let modalShow = false
      const inputValues = this.inputValues
      const keys = [
        "currMarginalTaxRate",
        "avgRetirementTaxRate",
        "amountOfDeposit",
        "yearsInvested",
        "returnOnInvestment",
        "inflationRate"
      ]

      for(let key of keys) {
        if ( inputValues[key] === null || inputValues[key] === undefined ) {
          this.modalShow = true
          return
        }
      }
      this.$emit('submit', this.inputValues)
    }
  }
}
</script>

<style scoped>
.calculate-btn {
  
}
label {
  font-weight: 800;
  font-family: "Raleway",sans-serif;
  color: #00b6de;
}
</style>

<!-- b-form-1.vue -->