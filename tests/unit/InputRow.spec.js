import Vue from 'vue'
import { shallowMount } from '@vue/test-utils'
import InputRow from '@/components/InputRow.vue'
import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue)

// helper function that mounts and returns the rendered text

function getRenderedText (Component, propsData) {
	const Constructor = Vue.extend(Component)
  const vm = new Constructor({ propsData: propsData }).$mount()
  return vm.$el.textContent
}

describe('InputRow', () => {
  it('sets the correct default data', () => {
    expect(typeof InputRow.data).toBe('function')
    const defaultData = InputRow.data()
    expect(defaultData.state).toBe(null)
    expect(defaultData.value).toBe(null)
  })

	it('renders correctly with different props', () => {
    expect(getRenderedText(InputRow, {
      data: {
      	title: 'Marginal tax',
      	name: 'marginalTax'
      }
    })).toBe('Marginal tax: ')

		expect(getRenderedText(InputRow, {
      data: {
      	title: 'Rate of return',
      	name: 'rate'
      }
    })).toBe('Rate of return: ')
  })

  it('handles percent input changed event correctly', () => {
  	const wrapper = shallowMount(InputRow, {
  		propsData: {
	  		data: {
	  			id: 1,
	  			title: 'Inflaction rate',
	  			name: 'inflationRate'
	  		}
  		}
  	})
  	wrapper.vm.handleChange(20)
  	expect(wrapper.emitted().changed[0]).toEqual([{ id: 1, name: 'inflationRate', value: 0.2 }])
  })

  it('handles number input changed event correctly', () => {
  	const wrapper = shallowMount(InputRow, {
  		propsData: {
	  		data: {
	  			id: 1,
	  			title: 'Amount of deposit',
	  			name: 'amountOfDeposit'
	  		}
  		}
  	})
  	wrapper.vm.handleChange(1000)
  	expect(wrapper.emitted().changed[0]).toEqual([{ id: 1, name: 'amountOfDeposit', value: 1000 }])
  })

  it('handles invalid input changed event correctly', () => {
  	const wrapper = shallowMount(InputRow, {
  		propsData: {
	  		data: {
	  			id: 1,
	  			title: 'Amount of deposit',
	  			name: 'amountOfDeposit'
	  		}
  		}
  	})
  	wrapper.vm.handleChange("test")
  	expect(wrapper.emitted().changed[0]).toEqual([{ id: 1, name: 'amountOfDeposit', value: null }])
  })
})