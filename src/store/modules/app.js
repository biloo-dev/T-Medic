// Pathify
import { make } from 'vuex-pathify' 
const state = {
  drawer: null,
  drawerImage: true,
  mini: false,
  items: [
    {
      title: 'Dashboard',
      icon: 'mdi-desktop-mac-dashboard',
      to: '/', 
    }, 
    {
      title: 'Users',
      icon: 'mdi-account',
      to: '/Users', 
    },
    {
      title: 'Login',
      icon: 'mdi-login',
      to: '/login', 
    },
    {
      title: 'Product',
      icon: 'mdi-package-variant',
      to: '/Products', 
    },
    {
      title: 'categoriers',
      icon: 'mdi-shape-outline',
      to: '/Categoriers', 
    },
  ],
}

const mutations = make.mutations(state)

const actions = {
  ...make.actions(state),
  init: async ({ dispatch }) => {
    // 
  },
}

const getters = {}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
}
