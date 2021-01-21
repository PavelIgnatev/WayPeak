import firebase from 'firebase/app'
export default{
    state: {
        performed: []
    },
    getters: {
        returnPerformedPost(state){
            return state.performed
        },
        returnPerformedPostLength(state){
            return Object.keys(state.performed).length
        }
    },  
    mutations:{
        sendPerformed(state, mess){
            state.performed = mess
        }
    },
    actions: {
        async pushPerformed({dispatch, commit}, {text}){
            try{
                const uid = await dispatch('getUid')
                await firebase.database().ref(`/users/${uid}/performed`).push({
                    text
                })
                dispatch('fetchPerformed')
            } catch(e){
                throw e
            }
        },
        async fetchPerformed({dispatch, commit}){
            try {
                const uid = await dispatch('getUid')
                const data = (await firebase.database().ref(`/users/${uid}/performed`).once('value')).val() || {}
                commit('sendPerformed', data)
            } catch (e) {
            }
        },
        async deletePerformed({dispatch, commit}, {id}){
            try {
                const uid = await dispatch('getUid')
                const data = (await firebase.database().ref(`/users/${uid}/performed/${id}`).remove())
                dispatch('fetchPerformed')
            } catch (e) {
                throw(e)
            }
        }
    }
}