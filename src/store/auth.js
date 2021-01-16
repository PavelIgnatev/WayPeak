import firebase from 'firebase/app'

export default{ 
    
    actions: {
        async login({dispatch, commit}, {email, password}){
            try{
                await dispatch('logout')
                await firebase.auth().signInWithEmailAndPassword(email, password)
            } catch(e){
                throw e
            }
        },
        async logout({dispatch, commit}){
            try{
                await firebase.auth().signOut()
                commit('clearState')
            }catch(e){
                throw e
            }
            
        },
        async register({dispatch, commit}, {email, password, name, sername}){
            try{
                await dispatch('logout')
                await firebase.auth().createUserWithEmailAndPassword(email, password)
                const uid = await dispatch('getUid')
                await firebase.database().ref(`/users/${uid}/info`).set({
                    name,
                    sername
                })
            } catch(e){
                throw e
            }
        },
        async sendPasswordResetEmail({dispatch, commit}, {email}){
            try{
                var actionCodeSettings = {
                    url: "http://localhost:8080"
                }
                await firebase.auth().sendPasswordResetEmail(email, actionCodeSettings)
            }catch(e){
                throw e
            }
        },
        getUid(){
            const user = firebase.auth().currentUser
            return user ? user.uid : null
        }

    }
}