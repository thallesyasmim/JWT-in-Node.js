const jwt = require('jsonwebtoken')

const sign = payload => jwt.sign(payload, 'yasmim') // jwt.decode() - return information of payload | jwt.sign() - generate new jwt | jwt.verify() - verify signature and return information payload
// yasmim - secret

const verify = token => new Promise((resolve, reject) => {
  jwt.verify(token, 'yasmim', (error, data) => error ? reject(error) : resolve(data)) // Many people use decode() at this stage of verification, but this is wrong. Because regardless of the secret, authentication would be performed, which is wrong, we should use verify
})

module.exports = {
  sign,
  verify,
}
