import firebase from 'firebase/app'

export default{ 
    actions: {
        async login({dispatch, commit}, {email, password}){
            try{
                await firebase.auth().signInWithEmailAndPassword(email, password)
            } catch(e){
                throw e
            }
        },
        async logout(){
            await firebase.auth().signOut()
        },
        async register({dispatch, commit}, {email, password, name, sername}){
            try{
                await firebase.auth().createUserWithEmailAndPassword(email, password)
                const uid = await firebase.auth().currentUser.uid
                await firebase.database().ref(`/users/${uid}/info`).set({
                    name,
                    sername
                })
            } catch(e){
                throw e
            }
        },
        async resetLogin({dispatch, commit}, {email}){
            try{
                await firebase.auth().generatePasswordResetLink(email)
            }catch(e){
                throw e
            }
        }
    }
}