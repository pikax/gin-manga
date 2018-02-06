// import Cookie from 'js-cookie'
// import jwtDecode from 'jwt-decode'
// import {isServerBuild} from "~/utils/misc";
//
// const getQueryParams = (): { id_token, state } => {
//   const params = {};
//   (window.location.href as any).replace(/([^(?|#)=&]+)(=([^&]*))?/g, ($0, $1, $2, $3) => {
//     params[$1] = $3;
//   }) ;
//   return params as any;
// };
//
// export const extractInfoFromHash = () => {
//   if (isServerBuild) return;
//   const {id_token, state} = getQueryParams();
//   return {
//     token: id_token,
//     secret: state
//   }
// };
//
// export const setToken = (token) => {
//   if (isServerBuild) return;
//   window.localStorage.setItem('token', token);
//   window.localStorage.setItem('user', JSON.stringify(jwtDecode(token)));
//   Cookie.set('jwt', token)
// };
//
// export const unsetToken = () => {
//   if (isServerBuild) return;
//   window.localStorage.removeItem('token');
//   window.localStorage.removeItem('user');
//   window.localStorage.removeItem('secret');
//   Cookie.remove('jwt');
//   window.localStorage.setItem('logout', Date.now().toString())
// };
//
// export const getUserFromCookie = (req) => {
//   if (!req.headers.cookie) return;
//   const jwtCookie = req.headers.cookie.split(';').find(c => c.trim().startsWith('jwt='));
//   if (!jwtCookie) return;
//   const jwt = jwtCookie.split('=')[1];
//   return jwtDecode(jwt)
// };
//
// export const getUserFromLocalStorage = () => {
//   const json = window.localStorage.user;
//   return json ? JSON.parse(json) : undefined
// };
//
// export const setSecret = (secret) => window.localStorage.setItem('secret', secret);
//
// export const checkSecret = (secret) => window.localStorage.secret === secret;
