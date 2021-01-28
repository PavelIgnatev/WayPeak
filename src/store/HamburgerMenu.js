export default{
    state: {
        hamburgerMenu: true,
        menuRight: true
    },
    getters: {
        returnHamburgerMenu(state){
            return state.hamburgerMenu
        },
        returnmenuRight(state){
            return state.menuRight
        }
    },
    mutations: {
        nothamburger(state){
            state.hamburgerMenu = !state.hamburgerMenu
        },
        falsehamburger(state){
            state.hamburgerMenu = false
        },
        truehamburger(state){
            state.hamburgerMenu = true
        },
        truemenuRight(state){
            state.menuRight = true
        },
        falsemenuRight(state){
            state.menuRight = false
        }
    }
}