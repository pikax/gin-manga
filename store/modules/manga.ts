import * as api from '~/api/manga';
import {MANGA} from "~/store/mutations"


// initial state
const state = {
  all: [],
  info: [],

  infoError: '',
};

// getters
const getters = {
  allMangas: state => state.all,

  getMangaByTitle: (state, getters) => title => {
    return state.info.find(x => x.title === title);
  },

  mangaError: state => state.infoError,
};

// actions
const actions = {
  getAllMangas({commit}) {
    api.getAllMangas().then(mangas => {
      commit(MANGA.RECEIVED_MY, {mangas})
    })
  },
  getMangaInfo({commit}, {title}) {
    return api.getInfo(title)
      .then(info => {
        commit(MANGA.RECEIVED_INFO, {info});
        return info;
      }).catch(error => commit(MANGA.RECEIVED_INFO_ERROR, {error}))
  }
};

// mutations
const mutations = {
  [MANGA.RECEIVED_MY](state, {mangas}) {
    state.all = mangas
  },

  [MANGA.RECEIVED_INFO](state, {info}) {
    state.infoError = '';
    const prev = state.info.findIndex(x => x.title === info.title);
    if (prev >= 0) {
      state.info.slice(prev)
    }
    state.info.push(info);
  },
  [MANGA.RECEIVED_INFO_ERROR](state, {error}) {
    state.infoError = error.toString();
  }

};

export default {
  state,
  getters,
  actions,
  mutations
}
