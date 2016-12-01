const test = require('tape')
const cssStyles = require('./')

test('cssStyle.parse', function (t) {
  t.plan(1)

  var styles = cssStyles.parse(
    'color: #bada55; background: url(https://test.com/example.jpg); font-size: 12px'
  )

  t.deepEqual(styles, {
    background: 'url(https://test.com/example.jpg)',
    color: '#bada55',
    fontSize: '12px'
  })
})

test('cssStyles.stringify', function (t) {
  t.plan(1)

  var styles = cssStyles.stringify({color: 'cyan', textAlign: 'center'})

  t.equal(styles, 'color: cyan; text-align: center;')
})
