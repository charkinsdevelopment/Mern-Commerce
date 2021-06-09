import { BrowserRouter, Route } from "react-router-dom";
import HomeScreen from "./screens/homescreen";
import ProductScreen from "./screens/productscreen";

function App() {
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="row top">
          <div>
            <a className="brand" href="/">
              Mern-commerce
            </a>
          </div>
          <div>
            <a href="/cart">Cart</a>
            <a href="/signin">Sign In</a>
          </div>
        </header>
        <main>
          <Route path="/product/:id" component={ProductScreen}></Route>
          <Route path="/" component={HomeScreen} exact></Route>
        </main>
        <footer className="row center">All right reserved</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
