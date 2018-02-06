import {APP} from "~/store/mutations";



const state = {
  online: true,
  dark: true,
};


// getters
const getters = {
  isOnline: state => state.online,


  darkTheme: state => state.dark,
};

const actions = {
  setOffline: ({commit}) => {
    commit(APP.UPDATE_CONNECTIVITY, false);
  },

  setOnline: ({commit}) => {
    commit(APP.UPDATE_CONNECTIVITY, true);
  },


  useDarkTheme: ({commit}, value) => {
    commit(APP.USE_DARK_THEME, value);
  },


};


const mutations = {

  [APP.UPDATE_CONNECTIVITY](state, status) {
    state.online = status;
  },

  [APP.USE_DARK_THEME](state, value) {
    state.dark = value;
  }
};


export default {
  state,
  getters,

  actions,
  mutations,
}
