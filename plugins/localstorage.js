import createPersistedState from 'vuex-persistedstate'

export default ({store}) => {
  console.log('creating persisted state')
  createPersistedState({})(store)
}
