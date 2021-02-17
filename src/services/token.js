require('dotenv/config')
const jwt = require('jsonwebtoken')
const { crypto: config } = require('../../config')

const signOptions = { // If we use the same secret to generate and validate the token, people who discover our secret can use it to enter services that they shouldn't
  algorithm: 'RS256', // There are different algorithms for private keys, let's use RS256 for example
  expiresIn: '15m' // If the expiration time is too short, you will need to authenticate again, that is, another query in the database which can be costly, the ideal time searching would be 15 minutes. And jwt helps a lot because it already brings some information in the payload.
}
// So we will use a private key to generate new tokens and a public one to validate

const sign = payload => jwt.sign(payload, config.jwt.privateKey.replace(/\n/gm, '\n'), signOptions) // jwt.decode() - return information of payload | jwt.sign() - generate new jwt | jwt.verify() - verify signature and return information payload
// yasmim - secret

const verify = token => new Promise((resolve, reject) => {
  jwt.verify(token, config.jwt.privatePublic.replace(/\n/gm, '\n'), (error, data) => error ? reject(error) : resolve(data)) // Many people use decode() at this stage of verification, but this is wrong. Because regardless of the secret, authentication would be performed, which is wrong, we should use verify
})

module.exports = {
  sign,
  verify,
}
