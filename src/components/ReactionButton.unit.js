import ReactionButton from './ReactionButton'
import { CreatelocalVue, mount } from '@vue/test-utils'

describe('./ReactButton.vue', () => {
  let localVue
  it('called Apollo mutation in addReaction method', () => {
    localVue = CreatelocalVue
    const mutate = jest.fn()
    const wrapper = mount(ReactionButton, {
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
    wrapper.vm.addReaction()
    expect(mutate).toBeCalled()
  })

  it('ReactionButton exists', () => {
    const wrapper = mount(ReactionButton, {
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
})
