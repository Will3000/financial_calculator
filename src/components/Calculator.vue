<template>
  <div class="calculator">
    <h1>TFSA vs RRSP Calculator</h1>
    <div class="well">
      <Form @submit="calculate"></Form>
      <hr>
      <Results :items="results"></Results>
    </div>
  </div>
</template>

<script>
import Form from './Form.vue'
import Results from './Results.vue'
import {futureValue} from '../libs/helpers'
// import { $ } from 'moneysafe';
// import { $$, subtractPercent, addPercent } from 'moneysafe/ledger';

export default {
  name: 'Calculator',
  components: {
    Form,
    Results
  },
  data () {
    return {
      results: []
    }
  },
  methods: {
    calculate(inputValues) {
      let { amountOfDeposit, avgRetirementTaxRate, currMarginalTaxRate, inflationRate, returnOnInvestment, yearsInvested } = inputValues
      let TFSA = {}
      let RRSP = {}
      let realRate = (1+returnOnInvestment) / (1+inflationRate) - 1

      TFSA.afterTaxAmount = Math.round(amountOfDeposit * (1 - currMarginalTaxRate))
      TFSA.nominalFutureVal = futureValue( TFSA.afterTaxAmount, returnOnInvestment, yearsInvested )
      TFSA.realFutureVal = futureValue( TFSA.afterTaxAmount, realRate, yearsInvested )
      TFSA.tax = "N/A"

      RRSP.afterTaxAmount = Math.round(amountOfDeposit)
      RRSP.nominalFutureVal = futureValue( RRSP.afterTaxAmount, returnOnInvestment, yearsInvested )
      RRSP.realFutureVal = futureValue( RRSP.afterTaxAmount, realRate, yearsInvested )
      RRSP.tax = Math.round( RRSP.nominalFutureVal * avgRetirementTaxRate )

      let results = [
        { name: "After-tax amount", TFSA: TFSA.afterTaxAmount, RRSP: RRSP.afterTaxAmount },
        { name: "Real future value", TFSA: TFSA.realFutureVal, RRSP: RRSP.realFutureVal },
        { name: "Tax upon withdrawal", TFSA: TFSA.tax, RRSP: RRSP.tax },
        { name: "After-tax future value", TFSA: TFSA.nominalFutureVal, RRSP: Math.round(RRSP.nominalFutureVal - RRSP.tax)},
      ]
      this.results = results
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
