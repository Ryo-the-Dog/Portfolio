const state = {
    modalName: ''
}

const mutations = {
    setModal (state, name) {
        state.modalName = name
    },
    hideModal (state) {
        state.modalName = ''
    }
}

const actions = {
    showModalTypeA ({ commit }) {
        commit('setModal', 'ModalTypeA')
    },
    showModalTypeB ({ commit }) {
        commit('setModal', 'ModalTypeB')
    },
    showModalTypeC ({ commit }) {
        commit('setModal', 'ModalTypeC')
    },
    showModalTypeD ({ commit }) {
        commit('setModal', 'ModalTypeD')
    },
    showModalTypeE ({ commit }) {
        commit('setModal', 'ModalTypeE')
    },
    showModalTypeF ({ commit }) {
        commit('setModal', 'ModalTypeF')
    },
    showModalTypeG ({ commit }) {
        commit('setModal', 'ModalTypeG')
    },
    showModalTypeH ({ commit }) {
        commit('setModal', 'ModalTypeH')
    },
    showModalTypeI ({ commit }) {
        commit('setModal', 'ModalTypeI')
    },
    showModalTypeJ ({ commit }) {
        commit('setModal', 'ModalTypeJ')
    },
    showModalTypeK ({ commit }) {
        commit('setModal', 'ModalTypeK')
    },
    showModalTypeL ({ commit }) {
        commit('setModal', 'ModalTypeL')
    },
    showModalTypeM ({ commit }) {
        commit('setModal', 'ModalTypeM')
    },
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}