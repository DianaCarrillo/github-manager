import RemoveButton from './RemoveButton.vue'
import { createLocalVue, shallowMount } from '@vue/test-utils'
import gql from 'graphql-tag'

describe('./RemoveButton.vue', () => {
  it('called Apollo mutation in addReaction method', () => {
    let localVue = createLocalVue()
    const mutate = jest.fn()
    const wrapper = shallowMount(RemoveButton, {
      propsData: {
        selected: {
          author: {
            avatarUrl: 'https://avatars0.githubusercontent.com/u/39560661?v=4',
            login: 'DianaCarrillo',
          },
          body:
            'Este Issue solamente es para recordarnos que para mañana esperamos poder: -empezar a imprimir la publicación -poder editar -poder borrar nuestra publicación.',
          id: 'MDU6SXNzdWUzNDQxODAyOTI=',
          number: 15,
          state: 'CLOSED',
          title: 'Para el sprint 2',
        },
      },
      localVue,
      mocks: {
        $apollo: {
          mutate,
        },
      },
    })
    wrapper.vm.removeReaction()
    expect(mutate).toBeCalled()
  })

  it('ReactionButton exists', () => {
    let localVue = createLocalVue()
    const wrapper = shallowMount(RemoveButton, {
      propsData: {
        selected: {
          author: {
            avatarUrl: 'https://avatars0.githubusercontent.com/u/39560661?v=4',
            login: 'DianaCarrillo',
          },
          body:
            'Este Issue solamente es para recordarnos que para mañana esperamos poder: -empezar a imprimir la publicación -poder editar -poder borrar nuestra publicación.',
          id: 'MDU6SXNzdWUzNDQxODAyOTI=',
          number: 15,
          state: 'CLOSED',
          title: 'Para el sprint 2',
        },
      },
      localVue,
    })
    expect(wrapper.isVueInstance()).toBe(true)
  })
  it('Renders repository query', () => {
    const repo = gql`
      query FindIssueID {
        repository(owner: "DianaCarrillo", name: "cdmx-2018-01-FE-markdown") {
          issue(number: 7) {
            __typename
            title
            id
            body
          }
          name
        }
      }
    `
    const query = jest.fn(async () => {
      await repo
    })
    const wrapper = shallowMount(RemoveButton, {
      propsData: {
        selected: {
          author: {
            avatarUrl: 'https://avatars0.githubusercontent.com/u/39560661?v=4',
            login: 'DianaCarrillo',
          },
          body:
            'Este Issue solamente es para recordarnos que para mañana esperamos poder: -empezar a imprimir la publicación -poder editar -poder borrar nuestra publicación.',
          id: 'MDU6SXNzdWUzNDQxODAyOTI=',
          number: 15,
          state: 'CLOSED',
          title: 'Para el sprint 2',
        },
      },
      mocks: {
        $apollo: {
          query,
        },
      },
    })
    expect(wrapper).toMatchSnapshot()
  })
})
