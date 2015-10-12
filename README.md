# css-styles

Parse and stringify inlined CSS declarations

## Example

``` js
const cssStyles = require('css-styles')

var styles = cssStyles.parse('background: #bada55; font-size: 12px')
console.log(styles)
// {
//   background: '#bada55',
//   fontSize: '12px'
// }

var styleString = cssStyles.stringify({position: 'absolute'})
console.log(styleString)
// 'position: absolute;'
```

## Usage

### `cssStyles.parse(string)`

Parse a string containing CSS declarations and returns an object. Keys will be camelCase.

### `cssStyles.stringify(styles={})`

Convert an object containing CSS declarations in to a string. Keys will be decamelized.

## Install

``` bash
$ npm install css-styles
```

## License

MIT
