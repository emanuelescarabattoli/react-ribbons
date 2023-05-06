import "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import React, { useState } from "react";
import PrismCode from "react-prism";
import logo from "./assets/img/rr_512.png";
import style from "./Application.scss";
import { RibbonContainer, Ribbon } from "react-ribbons";

const Application = () => {
  const [side, setSide] = useState("left");
  const [type, setType] = useState("corner");
  const [size, setSize] = useState("large");
  const [backgroundColor, setBackgroundColor] = useState("#cc0000");
  const [color, setColor] = useState("#ccffff");
  const [fontFamily, setFontFamily] = useState("sans");
  const [withStripes, setWithStripes] = useState(true);

  const onChangeSide = value => {
    setSide(value);
  };

  const onChangeType = value => {
    setType(value);
  };

  const onChangeSize = value => {
    setSize(value);
  };

  const onChangeBackgroundColor = value => {
    setBackgroundColor(value);
  };

  const onChangeColor = value => {
    setColor(value);
  };

  const onChangeFontFamily = value => {
    setFontFamily(value);
  };

  const onChangeWithStripes = value => {
    setWithStripes(value);
  };


  return (
    <>
      <header className={style.header}>
        <div className={style.headerContent}>
          <div className={style.logo}>
            <img src={logo} alt="React Ribbons" />
          </div>
          <div className={style.title}>
            <h1>React Ribbons</h1>
            <p>
              A React NPM package with a lot of fancy and easy to use ribbons components
            </p>
            <a href="https://github.com/emanuelescarabattoli/react-ribbons">GitHub Repo</a>
          </div>
        </div>
      </header>
      <section className={style.content}>
        <div className={style.sectionTitle}>
          <h2>Setup Instructions</h2>
          <p>
            Installation and setup of React Ribbons
          </p>
        </div>
        <p>
          To install the package tou can use <b>NPM</b> or <b>Yarn</b> and run the following command
        </p>
        <div className={style.code}>
          <PrismCode component="pre" className="language-shell">
            {`
// NPMetup
npm inall react-ribbons
// Yarsetup
yarn add react-ribbons
                `}
          </PrismCode>
        </div>
        <p>
          To import the package use the following snippet of code
        </p>
        <div className={style.code}>
          <PrismCode component="pre" className="language-javascript">
            {
              "import { RibbonContainer,  RightCornerRibbon } from \"react-ribbons\";"
            }
          </PrismCode>

        </div>
        <div className={style.sectionTitle}>
          <h2>Available properties</h2>
          <p>
            Here all the available properties you can use
          </p>
          <table className={style.propertiesTable}>
            <thead>
              <tr>
                <th>Property</th>
                <th>Description</th>
                <th>Values</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>side</code></td>
                <td>Where the ribbon will be displayed</td>
                <td><code>left</code><code>right</code></td>
              </tr>
              <tr>
                <td><code>type</code></td>
                <td>Position of the ribbon</td>
                <td><code>corner</code><code>edge</code></td>
              </tr>
              <tr>
                <td><code>size</code></td>
                <td>Size of the ribbon</td>
                <td><code>normal</code><code>large</code></td>
              </tr>
              <tr>
                <td><code>backgroundColor</code></td>
                <td>Background color</td>
                <td>eg. <code>#cc0000</code></td>
              </tr>
              <tr>
                <td><code>color</code></td>
                <td>Text color</td>
                <td>eg. <code>#ccffff</code></td>
              </tr>
              <tr>
                <td><code>fontFamily</code></td>
                <td>Text font family</td>
                <td>eg. <code>sans</code></td>
              </tr>
              <tr>
                <td><code>withStripes</code></td>
                <td>Decides if stripes are displayed</td>
                <td>eg. <code>true</code></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={style.sectionTitle}>
          <h2>Demo</h2>
          <p>
            Here you can find a demo on how to use the package
          </p>
        </div>
        <div className={style.columns}>
          <div className={style.code}>
            <PrismCode component="pre" className="language-html">
              {`
<RibbonContainer className={style.demo}>
  <Ribbon
    side="left"
    type="corner"
    size="large"
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
              `}
            </PrismCode>
          </div>
          <div>
            <RibbonContainer className={style.demo}>
              <Ribbon
                side={side}
                type={type}
                size={size}
                backgroundColor={backgroundColor}
                color={color}
                fontFamily={fontFamily}
                withStripes={withStripes}
              >
                Foo bar
              </Ribbon>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </RibbonContainer>
          </div>
        </div>
      </section>
    </>
  );
};

export default Application;
