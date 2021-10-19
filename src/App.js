
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './Pages/Shared/Header/Header';
import Home from './Pages/Home/Home/Home';
import AboutUs from './Pages/AboutUs/AboutUs';
import Contacts from './Pages/Contacts/Contacts';
import NotFound from './Pages/NotFound/NotFound';
import Login from './Pages/Login/Login/Login';
import AuthProvider from './AuthProvider/AuthProvider';
import ServiceDetail from './Pages/Home/ServiceDetail/ServiceDetail';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Doctors from './Pages/Doctors/Doctors';
import Footer from './Pages/Shared/Footer/Footer';

function App() {
  return (
    <div className="App">
        <AuthProvider>
          <Router>
              <Header></Header>
              <Switch>
                  <Route exact path="/">
                      <Home></Home>
                  </Route>
                  <Route path="/home">
                      <Home></Home>
                  </Route>
                  <Route path="/login">
                      <Login></Login>
                  </Route>
                  <Route path="/doctors">
                      <Doctors></Doctors>
                  </Route>
                  <Route path="/about">
                      <AboutUs></AboutUs>
                  </Route>
                  <Route path="/contact">
                      <Contacts></Contacts>
                  </Route>
                  <PrivateRoute path="/services/:serviceId">
                      <ServiceDetail></ServiceDetail>
                  </PrivateRoute>
                  <Route path="*">
                      <NotFound></NotFound>
                  </Route>
              </Switch>
              <Footer></Footer>
          </Router>
        </AuthProvider>
    </div>
  );
}

export default App;
