import { createLocalVue, shallowMount } from '@vue/test-utils'
import UserInfo from './UserInfo.vue'
import Navbar from './Navbar.vue'
import Issues from './Issues.vue'
import Repositories from './Repositories.vue'

describe('./HomeApp', () => {
  it('Contains UserInfo as a child', () => {
    let localVue = createLocalVue()
    const wrapper = shallowMount(UserInfo, { localVue })
    expect(wrapper.find(UserInfo).exists()).toBe(true)
  })

  it('Contains NavBar as a child', () => {
    let localVue = createLocalVue()
    const wrapper = shallowMount(Navbar, { localVue })
    expect(wrapper.find(Navbar).exists()).toBe(true)
  })

  it('Contains Issues as a child', () => {
    let localVue = createLocalVue()
    const wrapper = shallowMount(Issues, {
      propsData: {
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
      },
      localVue,
    })
    expect(wrapper.find(Issues).exists()).toBe(true)
  })

  it('Contains Repositories as a child', () => {
    let localVue = createLocalVue()
    const wrapper = shallowMount(Repositories, {
      propsData: {
        user: {
          repositories: [
            {
              edges: [
                {
                  node: {
                    id: 'MDEwOlJlcG9zaXRvcnkxNzA3MTkxNzg=',
                    name: 'graphql-vue-apollo',
                  },
                },
                {
                  node: {
                    id: 'MDEwOlJlcG9zaXRvcnkxNzEyMDIzMzM=',
                    name: 'graphql-v',
                  },
                },
                {
                  node: {
                    id: 'MDEwOlJlcG9zaXRvcnkxNzEzNzUyMzE=',
                    name: 'github-manager',
                  },
                },
              ],
            },
          ],
        },
      },
      localVue,
    })
    expect(wrapper.find(Repositories).exists()).toBe(true)
  })
})
