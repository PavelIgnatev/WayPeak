export default{
    state: {
        hamburgerMenu: true,
        menuRight: true,
        menuLeft: false,
        inputActive: false
    },
    
    getters: {
        returnHamburgerMenu(state){
            return state.hamburgerMenu
        },
        returnmenuRight(state){
            return state.menuRight
        },
        returnmenuLeft(state){
            return state.menuLeft
        },
        returninputActive(state){
            return state.inputActive
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
        },
        truemenuLeft(state){
            state.menuLeft = true
        },
        falsemenuLeft(state){
            state.menuLeft = false
        },
        trueinputActive(state){
            state.inputActive = true
        },
        falseinputActive(state){
            state.inputActive = false
        }
        
    }
}