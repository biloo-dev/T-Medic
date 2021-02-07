// Vue
import Vue from 'vue'
import Vuex from 'vuex'
import pathify from '@/plugins/vuex-pathify'

// Modules
import * as modules from './modules'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules,
  plugins: [
    pathify.plugin,
  ],
})

store.subscribe(mutation => {
  if (!mutation.type.startsWith('user/')) return

  store.dispatch('user/update', mutation)
})

store.dispatch('app/init')
store.dispatch('login/refreshData')

export default store

export const ROOT_DISPATCH = Object.freeze({ root: true })
