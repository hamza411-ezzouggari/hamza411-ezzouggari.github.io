import React, { useState, useEffect } from "react";
import "./App.css";
import "./Media-APP.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home/Home";
import About from "./About/About";
import Skills from "./skills/Skills";
import Portfolio from "./Portfolio/Portfolio";
import Contact from "./Contact/Contact";
import { ThreeDLoader } from "react-awesome-loaders";
function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);
  return (
    <div className="App">
      {loading ? (
        <div className="apexes">
          <div className="APP44">
            <ThreeDLoader
              colorRing1={"#da6d4d"}
              colorRing2={"#ff9e9d"}
              desktopSize={"150px"}
              mobileSize={"60px"}
              className={"ThreeDLoader"}
            />
            <div className="te3">
              <h1 className="tel4">loading </h1>
            </div>
          </div>
        </div>
      ) : (
        <Router>
          <Route path="/" exact component={Home} />
          <Route path="/About" component={About} />
          <Route path="/Skills" component={Skills} />
          <Route path="/Portfolio" component={Portfolio} />
          <Route path="/Contact" component={Contact} />
        </Router>
      )}
    </div>
  );
}

export default App;
