import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: '73fbac690b735b6ecee2444cee987b01',
    language: 'pr-BR',
    page: 1
  }
})

export default api
