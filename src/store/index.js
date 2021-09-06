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
                // const respuesta = await fetch('https://restcountries.eu/rest/v2/all')
                const respuesta = await fetch('api.json')
                const datos = await respuesta.json()
                console.log(datos)
                commit('setPaises', datos)
            } catch (error) {
                console.log(error)
            }
        },

        filtrarRegion({ commit, state }, region) {
            const filtro = state.paises.filter(pais =>
                // pais.region === region
                pais.region.includes(region)
            )
            commit('setPaisesFiltrados', filtro)
        },

        buscarpornombre({ commit, state }, nombrepais) {
            const textoCliente = nombrepais.toLowerCase()
            const filtro = state.paises.filter(pais => {
                const textoApi = pais.name.toLowerCase()
                if (textoApi.includes(textoCliente)) {
                    return pais
                }
            })
            commit('setPaisesFiltrados', filtro)
        }
    },
    getters: {
        topPaisesPoblacion(state) {
            return state.paisesFiltrado.sort((a, b) => {
                return a.population < b.population ? 1 : -1
            })
        }
    },
    modules: {}
})