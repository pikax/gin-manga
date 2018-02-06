import createPersistedState from 'vuex-persistedstate'

export default ({store}) => {

  store.dispatch('initializing');

  createPersistedState({
    paths: ["app"]
  })(store);

  store.dispatch('initialized');

  if (window.app_initialized) {
    window.app_initialized();
  }
}
