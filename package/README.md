<div align="center">
  <p>
    <img src="docs/favicon-310.png" alt="extension logo" width="200" />
  </p>
  <h1>React Ribbons</h1>
  <p>A React library with a lot of fancy and easy-to-use ribbon components</p>
  <p>
    <a href="https://www.npmjs.com/package/react-ribbons">
      <img src="https://img.shields.io/npm/v/react-ribbons.svg?maxAge=3600" alt="NPM version" />
    </a>
    <a href="https://www.npmjs.com/package/react-ribbons">
      <img src="https://img.shields.io/npm/dt/react-ribbons.svg?maxAge=3600" alt="NPM downloads" />
    </a>
  </p>

  <p>
    <a href="https://emanuelescarabattoli.github.io/react-ribbons/index.html">Documentation</a>
  </p>
</div>


## Installation

To install the package you can use NPM or Yarn and run the following command:

```
// Enter project folder
cd package

// NPM setup
npm install react-ribbons

// Yarn setup
yarn add react-ribbons
```

## Example usage

```js
import { RibbonContainer,  Right } from "react-ribbons";

const MyComponent = () => (
  <RibbonContainer className={style.demo}>
    <Ribbon
      side="right"
      type="edge"
      size="normal"
      backgroundColor="#cc0000"
      color="#ccffff"
      fontFamily="sans"
      withStripes
    >
      Foo bar
    </Ribbon>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </p>
  </RibbonContainer>
);

export default MyComponent;
```
