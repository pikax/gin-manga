import Cookie from 'cookie'

export default ({store, server, req}) => {
  store.dispatch('initializing');


  // const theme = localStorage.getItem('theme') !== '1';
  // const token = localStorage.getItem('token');


  // console.log(`theme: ${theme}`);
  // console.log(`token: ${token}`);






  const cookieStr = server ? req.headers.cookie : document.cookie;
  const cookies = Cookie.parse(cookieStr || '') || {};
  const token = cookies.token;

  store.dispatch('setToken', token);
  // ctx.commit('setToken', token)


  // store.dispatch('useDarkTheme', theme);

};
