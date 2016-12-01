const camelcase = require('camelcase')
const decamelize = require('decamelize')

module.exports.parse = function (string) {
  if (!string) return {}

  return string.split(';').reduce(function (memo, declaration) {
    if (!declaration) return memo

    var keyEndIndex = declaration.indexOf(':')
    const key = declaration.substring(0, keyEndIndex)
    const prop = declaration.substring(keyEndIndex + 1).trim()

    memo[camelcase(key)] = prop
    return memo
  }, {})
}

module.exports.stringify = function (styles) {
  if (!styles) return

  return Object.keys(styles).reduce(function (memo, key) {
    return memo + decamelize(key, '-') + ': ' + styles[key] + '; '
  }, '').trim()
}
