import NavBar from './navBar/navBar';
import './App.css';
import Home from './Home/home';
import Cursor from './cursor/cursor'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Services from './Services/services';


function App() {

  

  return (
    <div className="App">
      <Router>
            <Cursor/>
            <NavBar/>
        <Switch>
            <Route path = '/home' exact component = {Home}/>
            <Route path = '/services' exact component = {Services} />
            <Route  component={Home}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
