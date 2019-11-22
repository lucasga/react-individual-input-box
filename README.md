# react-individual-input-box

> React component for individual character input box

[![NPM](https://img.shields.io/npm/v/react-individual-input-box.svg)](https://www.npmjs.com/package/react-individual-input-box) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Example

![](react-individual-input-box-example-gif.gif)



## Install

```bash
npm install --save react-individual-input-box
```

## Usage

```tsx
import * as React from "react";

import InputBox from "react-individual-input-box";

class Example extends React.Component {
  render() {
    return (
      <InputBox
        size={4}
        value={this.value}
        onChange={() => this.onChange()}
        isPassword
        onlyNumbers
      />
    );
  }
}
```

## Props

Common props you may want to specify include:

- `size` - number of input boxes
- `value` - control the current value 
- `isPassword` - apply password dots to hide input data
- `onlyNumber` - allow only numbers
- `isConfirmInput` - allow use the input box component two times in screent as a confirm data input
- `onChange` - subscribe to change events


## License

MIT © [lucasga](https://github.com/lucasga)
