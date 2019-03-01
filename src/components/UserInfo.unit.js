import UserInfo from './UserInfo.vue'
import gql from 'graphql-tag'
import { createLocalVue, shallowMount, mount } from '@vue/test-utils'

describe('Displayed user correctly with query data', () => {
  it('displayed information query data correctly', () => {
    let localVue = createLocalVue()
    const wrapper = shallowMount(UserInfo, { localVue })
    wrapper.setData({
      user: {
        avatarUrl: 'https://avatars0.githubusercontent.com/u/39560661?v=4',
        bio: 'Coder, psychologist, catlover',
        name: 'Diana',
        email: 'carrillorivera.diana@gmail.com',
        status: {
          id: '457524',
          message: 'Working',
        },
      },
    })
    expect(wrapper.element).toMatchSnapshot()
  })
  it('Renders correct userName', () => {
    let localVue = createLocalVue()
    const wrapper = shallowMount(UserInfo, { localVue })
    wrapper.setData({
      user: {
        avatarUrl: 'https://avatars0.githubusercontent.com/u/39560661?v=4',
        bio: 'Coder, psychologist, catlover',
        name: 'Diana',
        email: 'carrillorivera.diana@gmail.com',
        status: {
          id: '457524',
          message: 'Working',
        },
      },
    })
    const userName = wrapper.findAll('p').at(0)
    expect(userName.text()).toBe('Working')
  })

  it('has a query', () => {
    const userInfo = gql`
      query user {
        user(login: "DianaCarrillo") {
          avatarUrl
          bio
          name
          email
          status {
            id
            message
          }
        }
      }
    `
    const query = jest.fn(async () => {
      await userInfo
    })
    const wrapper = mount(UserInfo, {
      mocks: {
        $apollo: {
          query,
        },
      },
    })
    expect(wrapper).toMatchSnapshot()
  })
})
