import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Home from './components/Home/Home/Home';
import PrivateRoute from './components/Home/PrivateRoute/PrivateRoute';
import Login from './components/Home/Login/Login';
import { createContext, useState } from 'react';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import AddReviews from './components/Dashboard/AddReviews/AddReviews';
import AddService from './components/Dashboard/AddService/AddService';
import BookService from './components/Dashboard/BookService/BookService';
import BookingList from './components/Dashboard/BookingList/BookingList';
import AddAdmin from './components/Dashboard/AddAdmin/AddAdmin';
import ManageAdmin from './components/Dashboard/ManageAdmin/ManageAdmin';
import Services from './components/Home/Home/ServiceData/Services';
import Navbar from './components/Shared/Navbar/Navbar';
import Footer from './components/Shared/Footer/Footer';
import ContactForm from './components/Home/ContactForm/ContactForm';

export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (


    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>

          <PrivateRoute exact path="/dashboard">
            <Dashboard />
          </PrivateRoute>
          <PrivateRoute exact path="/dashboard/addService">
            <AddService />
          </PrivateRoute>
          <PrivateRoute exact path="/dashboard/addReviews">
            <AddReviews />
          </PrivateRoute>

          <PrivateRoute exact path="/dashboard/bookingList">
            <BookingList></BookingList>
          </PrivateRoute>

          <PrivateRoute exact path="/dashboard/manageAdmin">
            <ManageAdmin></ManageAdmin>
          </PrivateRoute>

          <PrivateRoute exact path="/dashboard/addAdmin">
            <AddAdmin></AddAdmin>
          </PrivateRoute>

          <PrivateRoute exact path="/dashboard/book/:_id">
            <BookService />
          </PrivateRoute>
          <Route exact path="/contact">
            <Navbar></Navbar>
            <ContactForm />
            <Footer></Footer>
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/book">
            <Navbar></Navbar>
            <Services />
            <Footer></Footer>
          </Route>

          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
