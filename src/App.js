import "./App.css";
import Navbar from "./components/Navbar";
import About from "./screens/About";
import Projects from "./screens/Projects";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./screens/Home";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/projects' component={Projects} />
      </Switch>
    </Router>
  );
}

export default App;
