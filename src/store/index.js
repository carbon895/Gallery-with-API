import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex, axios)

// const URL = 'https://api.unsplash.com/photos/?client_id=af3ec96790b516dbd635202f7b3104ef6226d6edd57fd7d99ef707fcf953ccb2';

export default new Vuex.Store({
  state: {
    users: JSON.parse(localStorage.getItem('users') || '[]'),
  },
  mutations: {
    updateUsers(state, users) {
      state.users = users;
      localStorage.setItem('users', JSON.stringify(state.users));
    },
  },
  actions: {
    getUsers ({ commit }) { 
      axios.get('https://api.unsplash.com/photos/?client_id=af3ec96790b516dbd635202f7b3104ef6226d6edd57fd7d99ef707fcf953ccb2')
        .then((response) => {
          commit('updateUsers', response.data)
        })
        .catch(error => {
          console.log(error);
        })
    },
  },

  getters: {
    doneUsers: state => { return state.users; },
    userById: state => id => state.users.find(u => u.user.id === id)
  }
})
