import * as api from '~/api/manga/index';
import {MANGA} from "~/store/mutations"


// initial state
const state = {
  all: [],
  info: [],

  chapters: [],
  images:[],

  infoError: '',
};

// getters
const getters = {
  allMangas: state => state.all,

  getMangaByTitle: (state, getters) => title => {
    return state.info.find(x => x.title === title);
  },

  getChaptersByTitle: (state, getters) => title => {
    const chap =  state.chapters.find(x => x.title === title);
    return chap && chap.chapters || null;
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
  },
  getMangaChapters({commit}, title) {
    // commit(MANGA.REQUEST_CHAPTERS);
    return api.getChapters(title)
      .then(info => {
        commit(MANGA.RECEIVED_CHAPTERS, {info, title});
        return info;
      }).catch(error => commit(MANGA.REQUEST_CHAPTERS_ERROR, {error}))
  },

  getChapterImages({commit}, {title, chapterId}){
    return api.getChapter(title, chapterId)
      .then(chapter => {
        commit(MANGA.RECEIVED_CHAPTER_IMAGES, {chapter, title});
        return chapter;
      }).catch(error => commit(MANGA.REQUEST_CHAPTER_IMAGES_ERROR, {error}))
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
  },

  [MANGA.RECEIVED_CHAPTERS](state, {chapters, title}){
    state.chapters.push({title, chapters});
  },
  [MANGA.REQUEST_CHAPTERS_ERROR](state, {error}){
    state.infoError = error;
  },
  [MANGA.RECEIVED_CHAPTER_IMAGES](state, {chapter, title}){
    state.images.push({title, chapter});
  },
  [MANGA.REQUEST_CHAPTER_IMAGES_ERROR](state, {error}){
    state.infoError = error;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
}
