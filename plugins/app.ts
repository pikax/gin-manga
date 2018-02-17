import Cookie from 'cookie'

export default ({store, server, req}) => {
  store.dispatch('initializing');



  const cookieStr = server ? req.headers.cookie : document.cookie;
  const cookies = Cookie.parse(cookieStr || '') || {};
  const token = cookies.token;

  store.dispatch('setToken', token);
  // ctx.commit('setToken', token)



  const theme = cookies.theme === '1';

  console.error('theme: '+theme);

  //is dark
  store.dispatch('setTheme', theme);

};
