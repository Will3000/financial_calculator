import Vue from 'vue'
import { shallowMount, mount } from '@vue/test-utils'
import Calculator from '@/components/Calculator.vue'
import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue)

// helper function that mounts and returns the rendered text

describe('Calculator', () => {
  it('sets the correct default data', () => {
    expect(typeof Calculator.data).toBe('function')
    const defaultData = Calculator.data()
    expect(defaultData.results).toEqual([])
  })

	it('produces the correct results with given inputs', () => {
    const wrapper = shallowMount(Calculator)
    wrapper.vm.calculate({
      currMarginalTaxRate: 0.4,
      avgRetirementTaxRate: 0.4,
      amountOfDeposit: 1000,
      yearsInvested: 20,
      returnOnInvestment: 0.06,
      inflationRate: 0.02 
    })
    const results = wrapper.vm.results
    expect(results[0]).toEqual({ name: "After-tax amount", TFSA: 600, RRSP: 1000 })
    expect(results[1]).toEqual({ name: "Real future value", TFSA: 1295, RRSP: 2158 })
    expect(results[2]).toEqual({ name: "Tax upon withdrawal", TFSA: "N/A", RRSP: 1283 })
    expect(results[3]).toEqual({ name: "After-tax future value", TFSA: 1924, RRSP: 1924 })
  })
})