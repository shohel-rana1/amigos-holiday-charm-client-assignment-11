import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './pages/PrivateRoute/PrivateRoute';
import Footer from './pages/Footer/Footer';
import Header from './pages/Header/Header';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import NotFound from './pages/NotFound/NotFound';
import MyBookings from './pages/MyBookings/MyBookings';
import ManageBooking from './pages/ManageBooking/ManageBooking';
import NewPlace from './pages/NewPlace/NewPlace';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';

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
            <PrivateRoute path="/mybookings">
              <MyBookings></MyBookings>
            </PrivateRoute>
            <PrivateRoute path="/placeorder/:placeId">
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>
            <Route path="/managebooking">
              <ManageBooking></ManageBooking>
            </Route>
            <Route path="/newplace">
              <NewPlace></NewPlace>
            </Route>
            <Route path="/Login">
              <Login></Login>
            </Route>
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
