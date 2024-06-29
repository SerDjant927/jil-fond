import { createStore } from 'vuex';
import axios from 'axios';
export default createStore({
  state: {
    results: [],
    searchInput: '',
    selectedResult: null,
    filteredResults: []
  },
  mutations: {
    setSearchInput(state, value) {
      state.searchInput = value;

    },
    setResults(state, data) {
      state.results = data;
    },
    setSelectedResult(state, result) {
      state.selectedResult = result;
    },
    setFilteredResults(state, results) {
      state.filteredResults = results;
    }
  },
  actions: {
    async fetchResults({ commit }) {
      let getUsersList = `https://jsonplaceholder.typicode.com/users`;
      const response = await axios.get(getUsersList);
      console.log(response);
      commit('setResults', response.data);
    }
  }
});