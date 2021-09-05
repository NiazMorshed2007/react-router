import React, { useState } from "react";
import About from "./About";
import Project from "./Project";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const links = ["/", "/about", "/project"];
  const [index, setIndex] = useState(0);
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/project" component={Project} />
        </Switch>
      </div>
      <Link to={links[index]}>
        <button onClick={() => setIndex(index + 1)}>click</button>
      </Link>
    </Router>
  );
}

const Home = () => (
  <div>
    <h1>Home</h1>
  </div>
);

export default App;
