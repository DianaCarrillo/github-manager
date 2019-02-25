import Home from './UserInfo.vue'
import { CreatelocalVue, shallowMount } from '@vue/test-utils'


describe('Displayed user correctly with query data', () => {
 const localVue;

  it('displayd information quet data correctly', () => {
    localVue = CreatelocalVue()
    const wrapper = shallowMount(Home, { localVue })
    wrapper.setData({
      user: {
        avatarUrl: 'https://avatars0.githubusercontent.com/u/39560661?v=4',
        bio: 'Coder, psychologist, catlover',
        name: 'Diana',
        email: 'carrillorivera.diana@gmail.com',
      },
    })
    expect(wrapper.element).toMatchSnapshot()
  })
})
