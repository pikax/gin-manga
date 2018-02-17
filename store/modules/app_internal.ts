import {APP_INTERNAL} from "~/store/mutations";
import Cookie from 'cookie'


// const dark = window && window.localStorage && window.localStorage.getItem('theme');


const state = {
  online: true,
  dark: false,

  initializing: true,
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

  toggleTheme: ({commit, state}) => {
    const dark = !state.dark;
    commit(APP_INTERNAL.USE_DARK_THEME, dark);

    localStorage.setItem('theme', dark ? '1' : '0');
    createCookie("theme", dark ? '1' : '0', 30)
  },

  setTheme({commit}, dark) {
    commit(APP_INTERNAL.USE_DARK_THEME, dark);
  },


  initializing: ({commit}) => {
    commit(APP_INTERNAL.INITIALIZING);
  },

  initialized: ({commit}) => {
    commit(APP_INTERNAL.INITIALIZED);
  },


};

function createCookie(name, value, days) {
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    var expires = "; expires=" + date.toUTCString();
  }
  else {
    var expires = "";
  }
  document.cookie = name + "=" + value + expires + "; path=/";
}


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
    console.log('loaded')
  },
};


export default {
  state,
  getters,

  actions,
  mutations,
}
