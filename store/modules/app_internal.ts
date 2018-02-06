import {APP_INTERNAL} from "~/store/mutations";


// const dark = window && window.localStorage && window.localStorage.getItem('theme');


const state = {
  online: true,
  dark: false,

  initializing: false,
  loaded: false,
};


// getters
const getters = {
  isOnline: state => state.online,

  darkTheme: state => state.dark,


  appInitializing: state => state.initializing,
  appInitialized: state => state.loaded,
};

const actions = {
  setOffline: ({commit}) => {
    commit(APP_INTERNAL.UPDATE_CONNECTIVITY, false);
  },

  setOnline: ({commit}) => {
    commit(APP_INTERNAL.UPDATE_CONNECTIVITY, true);
  },

  useDarkTheme: ({commit}, value) => {
    commit(APP_INTERNAL.USE_DARK_THEME, value);
  },


  initializing: ({commit}) => {
    commit(APP_INTERNAL.INITIALIZED);
  },

  initialized: ({commit}) => {
    commit(APP_INTERNAL.INITIALIZED);
  },


};


const mutations = {

  [APP_INTERNAL.UPDATE_CONNECTIVITY](state, status) {
    state.online = status;
  },

  [APP_INTERNAL.USE_DARK_THEME](state, value) {
    state.dark = value;
  },


  [APP_INTERNAL.INITIALIZING](state) {
    state.initializing = true;
  },

  [APP_INTERNAL.INITIALIZED](state) {
    state.initializing = false;
    state.loaded = true;
  },
};


export default {
  state,
  getters,

  actions,
  mutations,
}
