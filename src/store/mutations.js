const mutations = {
  switchKey(state,key){
    state.key = key
  },
  switchCurrentTab(state, payload) {
    state.currentTab = payload
  },
  switchCurrentListTabIndex(state,payload){
    state.currentListTabIndex = payload
  }
}

export default mutations
