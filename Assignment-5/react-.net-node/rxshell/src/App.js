import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from './Components/Nav'
import Home from './Components/Home'
import Footer from './Components/Footer'
import Privacy from './Components/Privacy'
import NotFound from './Components/NotFound'
import ColdPlay from './Components/Songs/ColdPlay'
import EdSheeran from './Components/Songs/EdSheeran'
import Maroon5 from './Components/Songs/Maroon5'
function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/privacy" exact component={() => <Privacy />} />
          <Route path="/coldplay" exact component={() => <ColdPlay />} />
          <Route path="/maroon5" exact component={() => <Maroon5 />} />
          <Route path="/edsheeran" exact component={() => <EdSheeran />} />
          <Route path="*" exact component={() => <NotFound />} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;