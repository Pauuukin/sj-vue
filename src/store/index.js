import Vue from 'vue'
import Vuex from 'vuex'

// создаем store

Vue.use(Vuex)

const store = new Vuex.Store(
    {
        state: {
            backendUrl: "http://134.0.118.193/api/v1"
        },
        mutations: {},
        actions: {},
        modules: {},
        getters: {
            getServerUrl: state => {
                return state.backendUrl
            }
        }
    }
)

export default store