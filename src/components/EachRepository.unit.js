import EachRepository from './EachRepository.vue'
import { createLocalVue, shallowMount } from '@vue/test-utils'

describe('./Star.vue', () => {
  it('called Apollo mutation in addStar and unstar methods', () => {
    let localVue = createLocalVue()
    const mutate = jest.fn()
    const wrapper = shallowMount(EachRepository, {
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
    wrapper.vm.addStar()
    expect(mutate).toBeCalled()
    wrapper.vm.unstar()
    expect(mutate).toBeCalled()
  })
})
