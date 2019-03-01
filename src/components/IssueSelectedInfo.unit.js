import IssueSelectedInfo from './IssueSelectedInfo.vue'
import { createLocalVue, shallowMount } from '@vue/test-utils'

describe('./IssueSelectedInfo.vue', () => {
  it('Issues is a vue instance', () => {
    let localVue = createLocalVue()
    const wrapper = shallowMount(IssueSelectedInfo, {
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
  it('displays the correct text', () => {
    let localVue = createLocalVue()
    const wrapper = shallowMount(IssueSelectedInfo, {
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
    const firstP = wrapper.findAll('p').at(0)
    expect(firstP.text()).toBe('Selected Issue:  15')
    const secondP = wrapper.findAll('p').at(1)
    expect(secondP.text()).toBe('Title:  Para el sprint 2')
  })
})
