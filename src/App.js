import NavBar from './navBar/navBar';
import './App.css';
import Home from './Home/home';
import Cursor from './cursor/cursor'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {

  

  return (
    <div className="App">
      <Router>
            <Cursor/>
            <NavBar/>
            <Home/>
      </Router>
    </div>
  );
}

export default App;
