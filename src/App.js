import './App.css';
// IMPORT COMPONENTS
import Footer from './components/Footer';
import Header from './components/Headers';
import { Route, Switch } from "react-router-dom";
// IMPORT PAGES
import About from './pages/About'; 
import Home from './pages/Home';
import Projects from './pages/Projects';

function App() {
  // URL should have HEROKU URL for backend
  const URL = "https://portfoliohw1.herokuapp.com/";

  return (
    <div className="App">
    <Header />
    <Switch>
        <Route exact path="/">
        <Home />
        </Route>
        <Route path="/projects">
        <Projects URL={URL} />
        </Route>
        <Route path="/about">
        <About URL={URL} />
        </Route>
      </Switch>
      <Footer />
      </div>    
  );
}

export default App;
