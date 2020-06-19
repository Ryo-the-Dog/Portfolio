import Vue from 'vue'
import Vuex from 'vuex'
import BasicModal from './modules/BasicModal'
import multiModal from './modules/multiModal'


// モジュールシステムで使用するための記述
Vue.use(Vuex)

const state = {
}

const modules = {

    BasicModal,
    multiModal

}

const store = new Vuex.Store({
    state,
    modules
})

export default store