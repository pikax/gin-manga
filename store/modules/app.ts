import {APP} from "~/store/mutations";


const state = {


  online: true,
};


// getters
const getters = {
  isOnline : state => state.online,
};

const actions = {
  setOffline: ({commit})=>{
    commit(APP.UPDATE_CONNECTIVITY, false);
  },

  setOnline: ({commit})=>{
    commit(APP.UPDATE_CONNECTIVITY, true);
  },


};



const mutations ={

  [APP.UPDATE_CONNECTIVITY](state, status) {
    state.online = status;
  }
};


export default {
  state,
  getters,

  actions,
  mutations,
}
