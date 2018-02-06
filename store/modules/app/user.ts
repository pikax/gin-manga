import {IUserInfo} from "~/api/interface";
import * as api from '~/api/manga/user';
import {setToken} from "~/plugins/axios";
import {USER} from "~/store/mutations";


/*
interface IState extends IUserInfo {


  // favorite: Set<string>,
}
*/
const state = {
  username: '',

  favorites: [],

  loggedIn: false,
  token: null,

};

// getters
const getters = {
  favoriteMangas: state => state.favorite,


  isFavorite: state => title => state.favorites.indexOf(title) >= 0,
};


// actions
const actions = {

  addFavorite: ({commit}, title: string) => {
    commit(USER.SET_FAVORITE, {title});
  },
  removeFavorite: ({commit}, title: string) => {
    commit(USER.UNSET_FAVORITE, {title});
  },


  toggleFavorite: ({commit, getters, state, dispatch}, title: string) => {
    const event = getters.isFavorite(title)
      ? 'removeFavorite'
      : 'addFavorite';
    return dispatch(event, title);
  },





  refreshUser: ({commit}) => {
    commit(USER.REQUEST_USER_INFO);
    return api.getUserInfo()
      .then(info => {
        commit(USER.RECEIVED_USER_INFO, {info});
      });
  },
  setUser: ({commit, dispatch}, username) => {
    commit(USER.SET_USER, username);
    return dispatch('refreshUser');
  },
  setToken: ({commit, dispatch}, token) => {
    commit(USER.SET_TOKEN, token);
    return dispatch('refreshUser');
  },


};


// mutations
const mutations = {
  [USER.SET_FAVORITE](state, {title}) {
    state.favorites.push(title);
  },

  [USER.UNSET_FAVORITE](state, {title}) {
    const {favorites} = state;

    favorites.splice(favorites.indexOf(title), 1);
  },


  [USER.REQUEST_USER_INFO](state) {
    state.favorites.splice(-1);
    state.username = ''
  },

  [USER.RECEIVED_USER_INFO](state, {info}: { info: IUserInfo }) {
    state.favorites = info.favorites;
    state.username = info.username;
    state.loggedIn = Boolean(info);
  },


  [USER.SET_USER](state, user) {
    state.username = user;
    state.loggedIn = Boolean(user);
  },

  [USER.SET_TOKEN](state, token) {
    state.token = token;

    setToken(token);

    // // Store token in cookies
    // if (inBrowser) {
    //   if (!token) {
    //     return Cookies.remove('token', opts.tokenCookie)
    //   }
    //   Cookies.set('token', token, opts.tokenCookie)
    // }
  }


};

export default {
  state,
  getters,
  actions,
  mutations
}
