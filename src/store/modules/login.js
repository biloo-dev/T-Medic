// Utilities
import {
  make
} from 'vuex-pathify'
// Globals
import {
  IN_BROWSER,
  URL
} from '@/util/globals'
import {
  baxios
} from '@/util/helpers'
import axios from 'axios'
import store from '..'

const state = {
  isLogin: false,
  user: {}
}

const mutations = make.mutations(state)

const actions = {
  login: async({ commit },form) => {
    try {  
      let { data } = await axios.post(URL + '/login', form) 
      localStorage.setItem('token', data.token)
      store.set('login/user', data.user)
      store.set('login/isLogin', true)
      return data
    } catch (err) {
      store.set('login/isLogin', false)
      console.log('err :>> ', err);
    }
  },
  refreshData: async () => {
    try {
      let { data } = await baxios(URL + '/users/profile', 'GET')
       store.set('login/user', data)
       store.set('login/isLogin', true) 
    } catch (err) {
      store.set('login/isLogin', false)
      console.log('err :>> ', err);
    }
  },
}

const getters = {

}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
}
 