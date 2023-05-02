import "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import React from "react";
import PrismCode from "react-prism";
import logo from "./assets/img/rr_512.png";
import style from "./Application.scss";
import { RibbonContainer, Ribbon } from "react-ribbons";

const Application = () => {
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
          <h2>Examples</h2>
          <p>
            Here you can find examples on how to use the package
          </p>
        </div>
        <div className={style.columns}>
          <div className={style.code}>
            <PrismCode component="pre" className="language-html">
              {`
  <RibbonContainer className={style.demo}>
    <Ribbon>
        Foo bar
    </Ribbon>
    <b>These are the default values, check the code</b>
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
              <Ribbon isBordered={false}>
                Foo bar1
              </Ribbon>
              <b>These are the default values, check the code</b>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </RibbonContainer>
          </div>
        </div>
        <div className={style.columns}>
          <div className={style.code}>
            <PrismCode component="pre" className="language-html">
              {`
  <RibbonContainer className={style.demo}>
    <Ribbon side="right" type="edge" size="large" backgroundColor="#cc0000" color="#ccffff" fontFamily="sans">
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
              <Ribbon side="right" type="edge" size="normal" backgroundColor="#cc0000" color="#ccffff" fontFamily="sans">
                Foo bar
              </Ribbon>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </RibbonContainer>
          </div>
        </div>
        <div className={style.columns}>
          <div className={style.code}>
            <PrismCode component="pre" className="language-html">
              {`
  <RibbonContainer className={style.demo}>
    <Ribbon side="right" type="edge" size="large" backgroundColor="#cc0000" color="#ccffff" fontFamily="sans">
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
              <Ribbon side="right" type="edge" size="large" backgroundColor="#cc0000" color="#ccffff" fontFamily="sans">
                Foo bar
              </Ribbon>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </RibbonContainer>
          </div>
        </div>
        <div className={style.columns}>
          <div className={style.code}>
            <PrismCode component="pre" className="language-html">
              {`
  <RibbonContainer className={style.demo}>
    <Ribbon side="right" type="corner" size="normal" backgroundColor="#cc0000" color="#ccffff" fontFamily="sans">
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
              <Ribbon side="right" type="corner" size="normal" backgroundColor="#cc0000" color="#ccffff" fontFamily="sans">
                Foo bar
              </Ribbon>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </RibbonContainer>
          </div>
        </div>
        <div className={style.columns}>
          <div className={style.code}>
            <PrismCode component="pre" className="language-html">
              {`
  <RibbonContainer className={style.demo}>
    <Ribbon side="right" type="corner" size="large" backgroundColor="#cc0000" color="#ccffff" fontFamily="sans">
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
              <Ribbon side="right" type="corner" size="large" backgroundColor="#cc0000" color="#ccffff" fontFamily="sans">
                Foo bar
              </Ribbon>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </RibbonContainer>
          </div>
        </div>
        <div className={style.columns}>
          <div className={style.code}>
            <PrismCode component="pre" className="language-html">
              {`
  <RibbonContainer className={style.demo}>
    <Ribbon side="left" type="edge" size="normal" backgroundColor="#cc0000" color="#ccffff" fontFamily="sans">
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
              <Ribbon side="left" type="edge" size="normal" backgroundColor="#cc0000" color="#ccffff" fontFamily="sans">
                Foo bar
              </Ribbon>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </RibbonContainer>
          </div>
        </div>
        <div className={style.columns}>
          <div className={style.code}>
            <PrismCode component="pre" className="language-html">
              {`
  <RibbonContainer className={style.demo}>
    <Ribbon side="left" type="edge" size="large" backgroundColor="#cc0000" color="#ccffff" fontFamily="sans">
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
              <Ribbon side="left" type="edge" size="large" backgroundColor="#cc0000" color="#ccffff" fontFamily="sans">
                Foo bar
              </Ribbon>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </RibbonContainer>
          </div>
        </div>
        <div className={style.columns}>
          <div className={style.code}>
            <PrismCode component="pre" className="language-html">
              {`
  <RibbonContainer className={style.demo}>
    <Ribbon side="left" type="corner" size="normal" backgroundColor="#cc0000" color="#ccffff" fontFamily="sans">
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
              <Ribbon side="left" type="corner" size="normal" backgroundColor="#cc0000" color="#ccffff" fontFamily="sans">
                Foo bar
              </Ribbon>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </RibbonContainer>
          </div>
        </div>
        <div className={style.columns}>
          <div className={style.code}>
            <PrismCode component="pre" className="language-html">
              {`
<RibbonContainer className={style.demo}>
  <Ribbon side="left" type="corner" size="large" backgroundColor="#cc0000" color="#ccffff" fontFamily="sans">
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
              <Ribbon side="left" type="corner" size="large" backgroundColor="#cc0000" color="#ccffff" fontFamily="sans">
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
