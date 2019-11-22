# react-individual-input-box

> React component for individual character input box

[![NPM](https://img.shields.io/npm/v/react-individual-input-box.svg)](https://www.npmjs.com/package/react-individual-input-box) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

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

## License

MIT © [lucasga](https://github.com/lucasga)
