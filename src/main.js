import Vue from 'vue'
import App from './app'
import { ApolloClient } from 'apollo-client'
import VueApollo from 'vue-apollo'
import router from '@router'
import store from '@state/store'
import '@components/_globals'
import { HttpLink } from 'apollo-link-http'
import { setContext } from 'apollo-link-context'
import { InMemoryCache } from 'apollo-cache-inmemory'

const accessToken = '843dae6294974a26ac6bb31ffcd09fb3cb7fad96'

// Don't warn about using the dev version of Vue in development.
Vue.config.productionTip = false

const httpLink = new HttpLink({
  // uri: 'https://countries.trevorblades.com/',
  uri: `https://api.github.com/graphql?user_name="DianaCarrillo"&access_token=${accessToken}`,
  // fetchOptions: {
  //   mode: 'no-cors',
  // },
})
const headers = new Headers()

headers.append('Content-Type', 'application/json')
headers.append('Access-Control-Allow-Origin', 'http://localhost:8080')
headers.append('Access-Control-Allow-Credentials', 'true')

const middlewareLink = setContext(() => ({
  headers,
}))

const link = middlewareLink.concat(httpLink)

// const cors = require('cors')
const apolloClient = new ApolloClient({
  link,
  cache: new InMemoryCache(),
  connectToDevTools: true,
})

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
})

Vue.use(VueApollo)

// If running inside Cypress...
if (window.Cypress) {
  // Ensure tests fail when Vue emits an error.
  Vue.config.errorHandler = window.Cypress.cy.onUncaughtException
}

const app = new Vue({
  router,
  store,
  apolloProvider,
  render: (h) => h(App),
}).$mount('#app')

// If running inside Cypress...
if (window.Cypress) {
  // Attach the app to the window, which can be useful
  // for manually setting state in Cypress commands
  // such as `cy.logIn()`.
  window.__app__ = app
}
// export { apolloClient };
