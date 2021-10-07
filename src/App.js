import Navbar from "./Components/Navbar";
import ProductList from "./Pages/ProductList/ProductList";
import Home from "./Pages/Home/Home";
import ProductView from "./Pages/ProductView/ProductView";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Cart from "./Pages/Cart/Cart";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Navbar />
            <Home />
            <Footer/>
          </Route>
          <Route path="/product-view">
            <Navbar />
            <ProductView />
            <Footer/>
          </Route>
          <Route path="/product-list">
            <Navbar />
            <ProductList />
            <Footer/>
          </Route>
          <Route path="/cart">
            <Navbar />
            <Cart />
            <Footer/>
          </Route>
          <Route path="/signup">
            <Register />
          </Route>
          <Route path="/signin">
            <Login />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
