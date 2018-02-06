import Vuex from 'vuex';
import app from './modules/app';
import manga from "./modules/manga";
import user from "./modules/user";


const createStore = () => {
  return new Vuex.Store({

    modules: {
      app,
      manga,
      user,
    }
  })
};

export default createStore
