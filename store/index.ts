import Vuex from 'vuex';
import app from './modules/app/index';
import internal from "./modules/app_internal";


const createStore = () => {
  // console.log('creating store');
  return new Vuex.Store({

    state:{
      locale: 'en'
    },

    modules: {
      app,
      internal,
    }
  })
};

export default createStore
