# React Ribbons

![React Ribbons](https://emanuelescarabattoli.github.io/react-ribbons/favicon-150.png)

A React NPM package with a lot of fancy and easy to use ribbons components.

[Documentation](https://emanuelescarabattoli.github.io/react-ribbons/index.html)

## Installation

To install the package tou can use NPM or Yarn and run the following command

```
// NPM setup
npm install react-ribbons
// Yarn setup
yarn add react-ribbons
```

## Example usage

```
import { RibbonContainer,  RightCornerRibbon } from "react-ribbons";

const MyComponent = () => (
    <RibbonContainer className="custom-class">
        <RightCornerRibbon backgroundColor="#0088ff" color="#f0f0f0" fontFamily="Arial">
            Foo Bar
        </RightCornerRibbon>
        Lorem ipsum...
    </RibbonContainer>
);

export default MyComponent;

```