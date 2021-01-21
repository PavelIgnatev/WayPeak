import firebase from 'firebase/app'
export default{
    state: {
        InboxPost: [

        ]
    },
    getters: {
        returnInboxPost(state){
            return state.InboxPost
        },
        returnInboxPostLength(state){
            return state.InboxPost.length
        }
    },  
    mutations:{
        sendMess(state, mess){
            state.InboxPost = mess
        }
    },
    actions:{
        async pushMess({dispatch, commit}, {data}){
            try{
                const uid = await dispatch('getUid')
                await firebase.database().ref(`/users/${uid}/data`).set({
                    data    
                })
                commit('sendMess', data)
            } catch(e){
                throw e
            }
        },
        async fetchMess({dispatch, commit}){
            try {
                const uid = await dispatch('getUid')
                const data = (await firebase.database().ref(`/users/${uid}/data/data`).once('value')).val() || []
                commit('sendMess', data)
            } catch (e) {
            }
        }
    }
}