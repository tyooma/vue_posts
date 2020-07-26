import axios from 'axios';

export default {
  actions: {
    async fetchUsers({ commit }) {
      axios
        .get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
          commit('updateUsers', response.data)
        })
        .catch(error => console.log(error));
    },
  },
  mutations: {
    updateUsers (state, users) {
      state.users = users;
    },
    loginUser(state, email) {
      state.userId = state.users.find(user => user.email === email).id;
    },
    checkUserLogin(state, email) {
      state.validation = state.users.some(user => user.email === email);
    },
    logoutUser(state) {
      state.validation = false;
    },
  },
  state: {
    users: [],
    userId: 0,
    validation: false,
  },
  getters: {
    getUsers(state) {
      return state.users;
    },
    getUserId(state) {
      return state.userId;
    },
    getValidation(state) {
      return state.validation;
    },
  },
}
