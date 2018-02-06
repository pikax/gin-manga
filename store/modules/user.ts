import * as api from '../../api/manga/user';
import {USER} from "../mutations";
import {IUserInfo} from "../../api/interface";


interface IState extends IUserInfo {


  // favorite: Set<string>,
}

const state: IState = {
  username: '',

  favorites: []
};

// getters
const getters = {
  favoriteMangas: state => state.favorite,


  isFavorite: state => title => state.favorites.indexOf(title) >= 0,

  mangaError: state => state.infoError,
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

  refreshUser: ({commit}, username: string) => {
    commit(USER.REQUEST_USER_INFO);
    return api.getUserInfo(username)
      .then(info => {
        commit(USER.RECEIVED_USER_INFO, {info});
      });
  },


};


// mutations
const mutations = {
  [USER.SET_FAVORITE](state: IState, {title}) {
    state.favorites.push(title);
  },

  [USER.UNSET_FAVORITE](state: IState, {title}) {
    const {favorites} = state;

    favorites.splice(favorites.indexOf(title), 1);
  },


  [USER.REQUEST_USER_INFO](state: IState) {
    state.favorites.splice(-1);
    state.username = ''
  },

  [USER.RECEIVED_USER_INFO](state, {info}: { info: IUserInfo }) {
    state.favorites = info.favorites;
    state.username = info.username;

  }

};

export default {
  state,
  getters,
  actions,
  mutations
}
