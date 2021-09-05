import { createStore } from 'vuex'

export default createStore({
    state: {
        paises: [],
        paisesFiltrado: []
    },
    mutations: {
        setPaises(state, payload) {
            state.paises = payload
        },
        setPaisesFiltrados(state, payload) {
            state.paisesFiltrado = payload
        }
    },
    actions: {
        async getPaises({ commit }) {
            try {
                const respuesta = await fetch('https://restcountries.eu/rest/v2/all')
                const datos = await respuesta.json()
                console.log(datos)
                commit('setPaises', datos)
            } catch (error) {
                console.log(error)
            }
        }
    },
    getters: {
        topPaisesPoblacion(state) {
            return state.paises.sort((a, b) => {
                return a.population < b.population ? 1 : -1
            })
        }
    },
    modules: {}
})