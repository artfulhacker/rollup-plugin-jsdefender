# rollup-plugin-jsdefender

Rollup plugin that lets you compile your code with PreEmptive JSDefender.

## Install

```sh
npm install rollup-plugin-jsdefender
```

## Usage

```js
import jsDefender from 'rollup-plugin-jsdefender'

plugins: 
[
  jsDefender
  ({
    booleanLiterals:
    {
      randomize: true
    },
    integerLiterals:
    {
      radix: "none",
      randomize: true
    },
    debuggerRemoval: true,
    stringLiterals: true,
    propertyIndirection: true,
    localDeclarations:
    {
      nameMangling: "base52"
    },
    controlFlow:
    {
      randomize: true
    },
    functionReorder:
    {
      randomize:true
    },
    quietMode: true,
    license: "PJSD_LICENSE"
  })
]
```

See the [jsdefender user guide](https://www.preemptive.com/jsdefender/userguide/en/index.html#pctoc-command-line-options) for information about options.

## Licensing

To use this, you must have a valid license key. 

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
