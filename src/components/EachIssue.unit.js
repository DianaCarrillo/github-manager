import { createLocalVue, shallowMount } from '@vue/test-utils'
import EachIssue from './EachIssue.vue'

describe('./EachIssue', () => {
  it('has correct props', () => {
    let localVue = createLocalVue()
    const wrapper = shallowMount(EachIssue, {
      propsData: {
        iss: {
          node: {
            author: {
              avatarUrl:
                'https://avatars0.githubusercontent.com/u/39560661?v=4',
              login: 'DianaCarrillo',
            },
            body:
              'Qué archivos debo tener? Cli.js e index.js? qué va en cada uno?',
            id: 'MDU6SXNzdWUzNTg0MjcwNjE=',
            number: 6,
            reactions: {
              edges: [
                {
                  node: {
                    _typename: 'Reaction',
                    content: 'LAUGH',
                  },
                },
              ],
            },
            state: 'OPEN',
            title: 'división de archivos. Cli.js e index.js',
          },
        },
        localVue,
      },
    })
    expect(wrapper.props().iss.node.id).toBe('MDU6SXNzdWUzNTg0MjcwNjE=')
  })

  it('is a vue Insrtance', () => {
    let localVue = createLocalVue()
    const wrapper = shallowMount(EachIssue, {
      propsData: {
        iss: {
          node: {
            author: {
              avatarUrl:
                'https://avatars0.githubusercontent.com/u/39560661?v=4',
              login: 'DianaCarrillo',
            },
            body:
              'Qué archivos debo tener? Cli.js e index.js? qué va en cada uno?',
            id: 'MDU6SXNzdWUzNTg0MjcwNjE=',
            number: 6,
            reactions: {
              edges: [
                {
                  node: {
                    _typename: 'Reaction',
                    content: 'LAUGH',
                  },
                },
              ],
            },
            state: 'OPEN',
            title: 'división de archivos. Cli.js e index.js',
          },
        },
        localVue,
      },
    })
    expect(wrapper.isVueInstance()).toBe(true)
  })
})
