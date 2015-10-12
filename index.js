const camelcase = require('camelcase')
const decamelize = require('decamelize')

module.exports.parse = function (string) {
  if (!string) return {}

  return string.split(';').reduce(function (memo, declaration) {
    if (!declaration) return memo
    const parts = declaration.split(':')
    memo[camelcase(parts[0])] = parts[1].trim()
    return memo
  }, {})
}

module.exports.stringify = function (styles) {
  if (!styles) return

  return Object.keys(styles).reduce(function (memo, key) {
    return memo + decamelize(key, '-') + ': ' + styles[key] + '; '
  }, '').trim()
}
