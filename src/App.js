import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './Pages/Shared/Header/Header';
import Home from './Pages/Home/Home/Home';
import Doctor from './Pages/Doctors/Doctor';
import AboutUs from './Pages/AboutUs/AboutUs';
import Contacts from './Pages/Contacts/Contacts';
import NotFound from './Pages/NotFound/NotFound';

function App() {
  return (
    <div className="App">
        <Router>
            <Header></Header>
            <Switch>
                <Route exact path="/">
                    <Home></Home>
                </Route>
                <Route path="/home">
                    <Home></Home>
                </Route>
                <Route path="/doctors">
                    <Doctor></Doctor>
                </Route>
                <Route path="/about">
                    <AboutUs></AboutUs>
                </Route>
                <Route path="/contact">
                    <Contacts></Contacts>
                </Route>
                <Route path="*">
                    <NotFound></NotFound>
                </Route>
            </Switch>
        </Router>
    </div>
  );
}

export default App;
