export default{
    state: {
        hamburgerMenu: true
    },
    getters: {
        returnHamburgerMenu(state){
            return state.hamburgerMenu
        }
    },
    mutations: {
        nothamburger(state){
            state.hamburgerMenu = !state.hamburgerMenu
        }
    }
}