export default{
    state: {
        modalClose: false,
        modelCloseItem: false,
        reest: false
    },
    getters: {
        stateModalClose(state){
            return state.modalClose
        },
        stateModalCloseItem(state){
            return state.modelCloseItem
        },
        stateReest(state){
            return state.reest
        }
    },
    mutations: {
        OpenModalClose(state){
            state.modalClose = true
        },
        CloseModalClose(state){
            state.modalClose = false
        },
        OpenModalCloseItem(state){
            state.modelCloseItem = true
        },
        CloseModalCloseItem(state){
            state.modelCloseItem = false
        },
        OpenReest(state){
            state.reest = true
        },
        CloseReest(state){
            state.reest = false
        }
    }
}