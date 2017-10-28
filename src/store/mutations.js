const mutations = {
  switchKey(state,key){
    state.key = key
  },
  switchCurrentTab(state, payload) {
    state.currentTab = payload
  }
}

export default mutations
