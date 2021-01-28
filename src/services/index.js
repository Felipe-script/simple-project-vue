import axios from 'axios'

const apiClient = axios.create({
  baseURL: `http://localhost:3000/`,
  withCredentials: false, // padrao
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getPessoas(){
    return apiClient.get('pessoas')
  },
  deletePessoa(id){
    return apiClient.delete(`pessoas/${id}`)
  },
  criarPessoa(body){
    return apiClient.post('pessoas', body)
  },
  postPessoa(){}
}
