const jwt = require('jsonwebtoken')

const sign = payload => jwt.sign() // jwt.decode() - return information of payload | jwt.sign() - authenticate | jwt.verify() - 

const verify = _ => new Promise((resolve, reject) => resolve(true))

module.exports = {
  sign,
  verify,
}
