export default{
    state: {
        modalClose: false,
        modelCloseItem: false
    },
    getters: {
        stateModalClose(state){
            return state.modalClose
        },
        stateModalCloseItem(state){
            return state.modelCloseItem
        },
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
        }
    }
}