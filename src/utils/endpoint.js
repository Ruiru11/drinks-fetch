import server from './server'
const endpoints = {
  getCockTail: async id => server.get(`/lookup.php/?i=${id}`),
  getPopular: async () => server.get('/popular.php'),
  getRandom: async () => server.get('/random.php')
}

export default endpoints
