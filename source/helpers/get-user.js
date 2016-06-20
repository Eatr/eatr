import request from 'browser-request'

export default () => {
  return new Promise ((resolve, reject) => {
    request(`/username`, (err, response) => {
    	const user = JSON.parse(response.responseText)[0]
      if (err) {
        reject(err)
      } else if (user) {
    		resolve(user)
      } else {
      	resolve()
      }
  	})
  })
}
