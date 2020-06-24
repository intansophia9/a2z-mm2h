import React from "react";
//Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import Home from "./pages/Home";
import Benefits from "./pages/Benefits";
import Services from "./pages/Services";
import Procedures from "./pages/Procedures";
import About from "./pages/About";
import Error from "./pages/Error";
import Navbar from "./components/NavbarModule/Navbar";
import Footer from "./components/FooterModule/Footer";

import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <React.StrictMode>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/benefits" component={Benefits} />
          <Route exact path="/services" component={Services} />
          <Route exact path="/services#domestic" component={Services} />
          <Route exact path="/services#education" component={Services} />
          <Route exact path="/services#tax" component={Services} />
          <Route exact path="/services#family" component={Services} />
          <Route exact path="/services#business" component={Services} />
          <Route exact path="/procedures" component={Procedures} />
          <Route exact path="/about" component={About} />
          <Route component={Error} />
        </Switch>
        <Footer />
      </React.StrictMode>
    </React.Fragment>
  );
}

export default App;
