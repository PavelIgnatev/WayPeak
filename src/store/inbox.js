import firebase from 'firebase/app'
export default {
    state: {
        InboxPost: [

        ]
    },
    getters: {
        returnInboxPost(state) {
            return state.InboxPost
        },
        returnInboxPostLength(state) {
            return Object.keys(state.InboxPost).length
        },
        returnsortInboxPost: s => {
            let items = Object.keys(s.InboxPost).map(function(key) {
                return [key, s.InboxPost[key]];
              });
            items.sort(function(first, second) {
                return first[1].data - second[1].data;
              });
            return items
        }
    },
    mutations: {
        sendMess(state, mess) {
            state.InboxPost = mess
        },
        clearInboxPost(state) {
            state.InboxPost = {}
        }
    },
    actions: {
        async pushMess({
            dispatch,
            commit
        }, {
            text,
            description,
            data
        }) {
            try {
                const uid = await dispatch('getUid')
                await firebase.database().ref(`/users/${uid}/data`).push({
                    text,
                    description,
                    data: data ? data : Date.now()
                })
                dispatch('fetchMess')
            } catch (e) {
                throw e
            }
        },
        async fetchMess({
            dispatch,
            commit
        }) {
            try {
                const uid = await dispatch('getUid')
                const data = (await firebase.database().ref(`/users/${uid}/data`).once('value')).val() || {}
                commit('sendMess', data)
            } catch (e) {}
        },
        async deleteMess({
            dispatch,
            commit
        }, {
            id
        }) {
            try {
                const uid = await dispatch('getUid')
                const data = (await firebase.database().ref(`/users/${uid}/data/${id}`).remove())
                dispatch('fetchMess')

            } catch (e) {
                throw (e)
            }
        },
        async updateMess({
            dispatch,
            commit
        }, {
            text,
            description,
            id
        }) {
            try {
                const uid = await dispatch('getUid')
                if (text) {
                    await firebase.database().ref(`/users/${uid}/data/${id}`).update({
                        text: text ? text : 'Укажите название задачи',
                    })
                    dispatch('fetchMess')
                } else {
                    if (description) {
                        await firebase.database().ref(`/users/${uid}/data/${id}`).update({
                            description: description ? description : 'Укажите описание задачи',
                        })
                        dispatch('fetchMess')
                    }
                }
            } catch (e) {
                throw e
            }
        },
    }
}