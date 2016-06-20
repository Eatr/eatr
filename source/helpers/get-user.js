import request from 'browser-request'

export default () => {
  return new Promise ((resolve, reject) => {
    request(`/username`, (err, response) => {
      if (err) {
        console.log(err)
      } else {
        resolve(JSON.parse(response.responseText))
      }
    })
  })
}