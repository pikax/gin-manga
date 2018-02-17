import Vue from 'vue';
import Vuex, {Store} from 'vuex';

Vue.use(Vuex);


import app from '../modules/app/__mocks__/app';
import internal from '../modules/__mocks__/app_internal';

interface ICustomMocks{
  getters: {},
  mutations: {},
  actions: {},
  state: {},

  modules: {},
}

export function __createMocks(custom: Partial<ICustomMocks> = {getters: {}, mutations: {}, actions: {}, state: {}, modules:{}}) {
  const mockGetters = Object.assign({}, app.getters, internal.getters, custom.getters);
  const mockMutations = Object.assign({}, app.mutations, internal.mutations, custom.mutations);
  const mockActions = Object.assign({}, app.actions, internal.actions, custom.actions);
  const mockState = Object.assign({}, app.state, internal.state, custom.state);

  const mockModules ={ ...{app, internal}, ...custom.modules};


  return {
    getters: mockGetters,
    mutations: mockMutations,
    actions: mockActions,
    state: mockState,
    store: new Vuex.Store({
      getters: {},
      actions: {},
      state: {},
      mutations: {},
      // getters: mockGetters,
      // // mutations: mockMutations,
      // actions: mockActions,
      // state: mockState,
      modules: mockModules,
    }),
  };
}

export const store = __createMocks().store;


export const createStore = (custom?: Partial<ICustomMocks>): Store<any> => __createMocks(custom).store;

export default createStore;
