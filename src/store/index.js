import { createStore } from 'vuex'
import axios from 'axios';
let savedToken = localStorage.getItem('user_token');
let savedUser = localStorage.getItem('user');

if(savedToken){
  axios.defaults.headers.common['Authorization'] = 'Bearer ' + savedToken;
}
const state = {
  user_token: savedToken ? savedToken : "",
  user: savedUser ? JSON.parse(savedUser) :null,
}

export default createStore({
  state,
  mutations: {
    setUser (state, user) {
      state.user = {...user};
      localStorage.setItem('user', JSON.stringify(user))
    },
    setUserToken (state, token) {
      state.user_token = token
      localStorage.setItem('user_token', token);
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
    },

  },
  actions: {

  },
  modules: {},
  getters: {
    user () {
      return state.user
    },
    userToken () {
      return state.user_token
    }
  },
})
