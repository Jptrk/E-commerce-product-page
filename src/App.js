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
    </div>
  );
}

export default App;
