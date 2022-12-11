export default {
    toggleIndexScrollHiddenStatus(state,payload){
        state.indexScrollHidden = payload
    },

    changeNavState(state,payload){
        state.navState = payload
    },
};