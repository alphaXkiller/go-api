import API from '../index'

const baseURL = 'http://test.com'
const pathMap = {
  images: '/image/:id',
}

const GoogleService = new API({ baseURL, pathMap })

GoogleService.get('images', { params: { id: 1 } })
  .then(console.log)
  .catch(console.log.bind(console, 'error'))
