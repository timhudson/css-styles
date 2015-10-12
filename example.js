const cssStyles = require('./')

var styles = cssStyles.parse('background: #bada55; font-size: 12px')
console.log(styles)
// {
//   background: '#bada55',
//   fontSize: '12px'
// }

var styleString = cssStyles.stringify({position: 'absolute'})
console.log(styleString)
// 'position: absolute;'
