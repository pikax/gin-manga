import Cookie from 'cookie';

export default ({store, isServer, req}) => {


  store.dispatch('initialized');
  if((window as any).__APP_INITIALIZED){
    // (window as any).__APP_INITIALIZED();
  }
};
