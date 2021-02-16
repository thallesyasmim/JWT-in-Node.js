const jwt = require('jsonwebtoken')

const sign = payload => jwt.sign(payload, 'yasmim') // jwt.decode() - return information of payload | jwt.sign() - generate new jwt | jwt.verify() - verify signature and return information payload
// yasmim - secret

const verify = _ => new Promise((resolve, reject) => resolve(true))

module.exports = {
  sign,
  verify,
}
