import UserInfo from './UserInfo.vue'
import { createLocalVue, shallowMount } from '@vue/test-utils'

describe('Displayed user correctly with query data', () => {
  it('displayd information quet data correctly', () => {
    const localVue = createLocalVue()
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
})
