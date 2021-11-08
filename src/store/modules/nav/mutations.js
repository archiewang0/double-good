export default {
    toggleIndexScrollHiddenStatus(state,payload){
        state.indexScrollHidden = payload
    },

    // 接受string
    changeNavState(state,payload){
        state.navState = payload
    },



};