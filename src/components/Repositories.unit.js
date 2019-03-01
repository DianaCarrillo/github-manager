import Repositories from './Repositories.vue'
import { createLocalVue, shallowMount } from '@vue/test-utils'

describe('./Repositories.vue', () => {
  it('Displayed repositories correctly with query data', () => {
    let localVue = createLocalVue()
    const wrapper = shallowMount(Repositories, { localVue })
    wrapper.setData({
       user:  {
          user(login: 'DianaCarrillo'): {
            repositories : {
              edges: {
                node: {
                  name:"zxczxc",
                  id:"xczxc"
                }
              }
            }
          }
        }
      })
  })
})
