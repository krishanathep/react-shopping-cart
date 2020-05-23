import React from "react";
import Navbar from "./layouts/Navbar";
import Home from "./component/Home";
import Cart from "./component/Cart";
import { HashRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <HashRouter basename="/">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/cart" component={Cart} />
        </Switch>
      </HashRouter>
      <footer className="footer my-5">
        <div className="container">
          <span className="text-muted">
            &copy; React Shopping Cart by <a href='https://krishanathep.github.io'>Full Stack Solution Co.,Ltd.</a>
          </span>
        </div>
      </footer>
    </div>
  );
}

export default App;
