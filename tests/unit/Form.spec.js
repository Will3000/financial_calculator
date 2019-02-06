import Vue from 'vue'
import { shallowMount, mount } from '@vue/test-utils'
import Form from '@/components/Form.vue'
import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue)

// helper function that mounts and returns the rendered text

describe('Form', () => {
  it('sets the correct default data', () => {
    expect(typeof Form.data).toBe('function')
    const defaultData = Form.data()
    expect(defaultData.inputs).toEqual([
      { id: 1, title: 'Current Marginal Tax Rate(%)', name: 'currMarginalTaxRate'},
      { id: 2, title: 'Average Tax Rate in Retirement(%)', name: 'avgRetirementTaxRate'},
      { id: 3, title: 'Amount of Deposit', name: 'amountOfDeposit'},
      { id: 4, title: 'Years Invested', name: 'yearsInvested'},
      { id: 5, title: 'Return on Investment(%)', name: 'returnOnInvestment'},
      { id: 6, title: 'Inflation Rate(%)', name: 'inflationRate'},
    ])
    expect(defaultData.inputValues).toEqual({})
    expect(defaultData.modalShow).toBe(false)
  })

	it('handles input change correctly', () => {
    const wrapper = shallowMount(Form)
    wrapper.vm.onInputChange({ id: 1, name: 'amountOfDeposit', value: 1000 })
    expect( wrapper.vm.inputValues['amountOfDeposit']).toBe(1000)
  })

  it('submits the input values correctly', () => {
  	const wrapper = shallowMount(Form)
    wrapper.vm.onInputChange({ id: 1, name: 'currMarginalTaxRate', value: 0.4 })
    wrapper.vm.onInputChange({ id: 2, name: 'avgRetirementTaxRate', value: 0.4 })
    wrapper.vm.onInputChange({ id: 3, name: 'amountOfDeposit', value: 1000 })
    wrapper.vm.onInputChange({ id: 4, name: 'yearsInvested', value: 20 })
    wrapper.vm.onInputChange({ id: 5, name: 'returnOnInvestment', value: 0.6 })
    wrapper.vm.onInputChange({ id: 6, name: 'inflationRate', value: 0.2 })
		wrapper.vm.onSubmit()
		expect(wrapper.emitted().submit[0]).toEqual([{
			currMarginalTaxRate: 0.4,
      avgRetirementTaxRate: 0.4,
      amountOfDeposit: 1000,
      yearsInvested: 20,
      returnOnInvestment: 0.6,
      inflationRate: 0.2 
    }])
  })

})