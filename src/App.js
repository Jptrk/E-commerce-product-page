//Style
import GlobalStyle from "./GlobalStyle";
//Components
import Navbar from "./Components/Navbar";
import Product from "./Components/Product";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Navbar />
      <Product />
      <div className="attribution" style={{ textAlign: "center" }}>
        Challenge by&nbsp;
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          rel="noreferrer"
          target="_blank"
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a href="https://github.com/Jptrk/" rel="noreferrer" target="_blank">
          Jptrk
        </a>
        .
      </div>
    </div>
  );
}

export default App;
