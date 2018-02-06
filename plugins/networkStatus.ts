const toggleNetworkStatus = (store) => ({type}) => {

  if (type === 'online') {
    store.dispatch('setOnline');
  } else {
    store.dispatch('setOffline');
  }
};

export default ({store}) => {

  if (window.navigator && Boolean(window.navigator.onLine)) {
    store.dispatch('setOnline');
  } else {
    store.dispatch("setOffline");
  }


  console.log('network status')


  window.addEventListener('offline', toggleNetworkStatus(store));
  window.addEventListener('online', toggleNetworkStatus(store));
};
