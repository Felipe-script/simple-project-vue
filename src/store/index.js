import Vue from 'vue'
import Vuex from 'vuex'
import service from "@/services";
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loading: false,
    list: [],
    snackBar: {
      msg: '',
      color: '',
      visible: false
    }
  },
  mutations: {
    SET_LISTA_PESSOA(state, list) {
      state.list = list
    },
    SET_LOADING(state, isVisible) {
      state.loading = isVisible
    },
    SET_DELETE(state, id) {
      state.list = state.list.filter(pessoa => pessoa.id !== id)
    },
    SET_SNACK_BAR(state, { msg, success = true }) {
      state.snackBar = { color: success ? 'success' : 'error', msg, visible: true}
    }
  },
  actions: {
    async listaPessoas({ commit, dispatch }) {
      let listaPessoas
      try {
        dispatch('setLoading', true)
        const { data } = await service.getPessoas()
        listaPessoas = data
      } catch (error) {
        console.log(error)
      } finally {
        dispatch('setLoading', false)
      }
      commit('SET_LISTA_PESSOA', listaPessoas)
    },
    setLoading({ commit }, isVisible) {
      commit('SET_LOADING', isVisible)
    },
    async setDelete({ commit, dispatch }, id) {
      try {
        dispatch('setLoading', true)
        await service.deletePessoa(id);
        dispatch('setSnackBar', {msg : 'Excluido com sucesso!'})
        commit('SET_DELETE', id)
      } catch (error) {
        dispatch('setSnackBar', {msg : 'Erro ao excluir pessoa!', success: false})
        console.log("error", error);
      } finally {
        dispatch('setLoading', false)
      }
    },
    setSnackBar({ commit }, { msg, success = true }){
      commit('SET_SNACK_BAR', {msg, success})
    }
  },
  getters:{
    getPessoas: state => state.list
  }
})
