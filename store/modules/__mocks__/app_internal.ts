const state ={
  online: true,
  dark: false,

  initializing: true,
  loaded: false,
};

const getters = {
  isOnline: jest.fn(()=> state.online)

};


const actions ={
  setOffline: jest.fn(()=> state.online = false),

  setOnline: jest.fn(()=> state.online = true),

};


const mutations = {

};

export default {
  state,
  getters,
  actions,

  mutations
}
