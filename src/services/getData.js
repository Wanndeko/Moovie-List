import api from './api'

export async function getApiMovies() {
  const {
    data: { results }
  } = await api.get('/movie/popular')

  return results
}

export async function getTopMovies() {
  const {
    data: { results }
  } = await api.get('/movie/top_rated')

  return results
}

export async function getApiSeries() {
  const {
    data: { results }
  } = await api.get('/tv/top_rated')

  return results
}

export async function getPopularSeries() {
  const {
    data: { results }
  } = await api.get('/tv/popular')

  return results
}

export async function getPerson() {
  const {
    data: { results }
  } = await api.get('/person/popular')

  return results
}

export async function getApiMovie(movieId) {
  const {
    data: { results }
  } = await api.get(`/movie/${movieId}/videos`)

  return results
}
