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
        },
        clearPerformed(state){
            state.performed = {}
        }
    },
    actions: {
        async pushPerformed({dispatch, commit}, {text, description, data}){
            try{
                const uid = await dispatch('getUid')
                await firebase.database().ref(`/users/${uid}/performed`).push({
                    text,
                    data,
                    description
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