import { createLocalVue, shallowMount } from '@vue/test-utils'
import EachIssue from './EachIssue.vue'

describe('./EachIssue', () => {
  // it('has correct props', () => {
  //   let localVue = createLocalVue()
  //   const wrapper = shallowMount(EachIssue, {
  //     porpsData: {
  //       iss: {
  //         node: {
  //           author: {
  //             avatarUrl:
  //               'https://avatars0.githubusercontent.com/u/39560661?v=4',
  //             login: 'DianaCarrillo',
  //           },
  //           body:
  //             'Majo, recuerda que debemos hacer merge en los cambios que hicimos ayer. ¡Gracias!',
  //           id: 'MDU6SXNzdWUzMzYyNDIyNTQ=',
  //           number: 9,
  //           reactions: {
  //             edges: {
  //               node: {
  //                 content: 'HOORAY',
  //               },
  //             },
  //           },
  //           state: 'OPEN',
  //           title: '2do sprint',
  //         },
  //       },
  //     },
  //     localVue,
  //   })
  //   expect(wrapper.props().iss.node.id).toBe('MDU6SXNzdWUzNDQxODAyOTI=')
  // })

  it('is a vue Insrtance', () => {
    let localVue = createLocalVue()
    const wrapper = shallowMount(EachIssue, {
      porpsData: {
        iss: {
          nodes: [
            {
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
                  nodes: [
                    {
                      content: 'HOORAY',
                    },
                  ],
                },
              },
              state: 'OPEN',
              title: '2do sprint',
            },
          ],
        },
        localVue,
      },
    })
    expect(wrapper.isVueInstance()).toBe(true)
  })
})
