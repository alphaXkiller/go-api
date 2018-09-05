# Go-API

A library to simplify api request

## Installing

Using yarn:

```sh
yarn add go-api
```

## Example

```javascript
import GoAPI from 'go-api'

// required
const baseURL = 'http://localhost:3000'
// required
const pathMap = {
  user: '/user'
  userById: '/user/:id'
}
// optional
const configFn = options => {
  // must return axios request config
  return { headers: { Authorization: 'Bearer tokenstring' }}
}

const API = new GoAPI({ baseURL, pathMap, configFn })

// Post with request body
const newUser = (username, email, password) => API.post('user', {
  body: { username, email, password }
})
// It will hit http://localhost:3000/user with username, email and password in the request body
newUser('alphaxkiller', 'frankie0628@gmail.com', 'abc')

// Get with params
const getUserById = id => API.get('userById', {
  params: { id }
})
// it will hit http://localhost:3000/user/10
getUserById(10)


// Get with queries
const searchUser = ({limit, page}) => API.get('user', {
  queries: { limit, page }
})
// it will hit http://localhost:3000/user?limit=10&page=1
searchUser({limit: 10, page: 1})
```