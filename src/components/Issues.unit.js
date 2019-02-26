import Issues from './Issues.vue'
import { createLocalVue, shallowMount } from '@vue/test-utils'

describe('./Issues.vue', () => {
  it('Issues is a vue instance', () => {
    let localVue = createLocalVue()
    const wrapper = shallowMount(Issues, { localVue })
    expect(wrapper.isVueInstance()).toBe(true)
  })
  it('Displayed issues correctly with query data', () => {
    let localVue = createLocalVue()
    const wrapper = shallowMount(Issues, { localVue })
    wrapper.setData({
      user: {
        issues: [
          {
            edges: {
              node: {
                author: {
                  avatarUrl:
                    'https://avatars0.githubusercontent.com/u/39560661?v=4',
                  login: 'DianaCarrillo',
                },
                body:
                  'Majo, recuerda que debemos hacer merge en los cambios que hicimos ayer. ¡Gracias!',
                id: 'MDU6SXNzdWUzMzYyNDIyNTQ=',
                number: 9,
                reactions: {
                  edges: {
                    node: {
                      content: 'HOORAY',
                    },
                  },
                },
                state: 'OPEN',
                title: '2do sprint',
              },
            },
          },
        ],
      },
    })
    expect(wrapper.element).toMatchSnapshot()
  })
})
