import Star from './Star.vue'
import { createLocalVue, shallowMount } from '@vue/test-utils'

describe('./Star.vue', () => {
  it('called Apollo mutation in addStar method', () => {
    let localVue = createLocalVue()
    const mutate = jest.fn()
    const wrapper = shallowMount(Star, {
      propsData: {
        repository: {
          node: {
            id: 'MDEwOlJlcG9zaXRvcnkxNjg3NTcyNjY=',
            name: 'Gestionix.5',
          },
        },
      },
      localVue,
      mocks: {
        $apollo: {
          mutate,
        },
      },
    })
    const i = wrapper.find('i')
    i.trigger('click', {
      target: { starrableId: 'MDEwOlJlcG9zaXRvcnkxNjg3NTcyNjY=' },
    })
    wrapper.vm.addStar()
    expect(mutate).toBeCalled()
  })
})
