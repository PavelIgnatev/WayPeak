import firebase from 'firebase/app'
export default{
    state: {
        trash: []
    },
    getters: {
        returnTrashPost(state){
            return state.trash
        },
        returnTrashPostLength(state){
            return Object.keys(state.trash).length
        }
    },  
    mutations:{
        sendTrash(state, mess){
            state.trash = mess
        },
        clearTrash(state){
            state.trash = {}
        }
    },
    actions: {
        async pushTrash({dispatch, commit}, {text, data, description}){
            try{
                const uid = await dispatch('getUid')
                await firebase.database().ref(`/users/${uid}/trash`).push({
                    text,
                    data,
                    description
                })
                dispatch('fetchTrash')
            } catch(e){
                throw e
            }
        },
        async fetchTrash({dispatch, commit}){
            try {
                const uid = await dispatch('getUid')
                const data = (await firebase.database().ref(`/users/${uid}/trash`).once('value')).val() || {}
                commit('sendTrash', data)
            } catch (e) {
            }
        },
        async deleteTrashAll({dispatch, commit}){
            try {
                const uid = await dispatch('getUid')
                const data = (await firebase.database().ref(`/users/${uid}/trash`).remove())
                dispatch('fetchTrash')
            } catch (e) {
                throw(e)
            }
        },
        async deleteTrash({dispatch, commit}, {id}){
            try {
                const uid = await dispatch('getUid')
                const data = (await firebase.database().ref(`/users/${uid}/trash/${id}`).remove())
                dispatch('fetchTrash')
            } catch (e) {
                throw(e)
            }
        }
    }
}