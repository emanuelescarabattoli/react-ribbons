# React Ribbons

![React Ribbons](https://emanuelescarabattoli.github.io/react-ribbons/favicon-150.png)

A React library with a lot of fancy and easy-to-use ribbon components.

[Documentation](https://emanuelescarabattoli.github.io/react-ribbons/index.html)

## Installation

To install the package you can use NPM or Yarn and run the following command:

```
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
    <Ribbon side="right" type="edge" size="normal" backgroundColor="#cc0000" color="#ccffff" fontFamily="sans">
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
