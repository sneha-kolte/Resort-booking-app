import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';
import Error from './pages/Error';
import { Switch, Route } from "react-router-dom";
import Navbar from './Components/Navbar';
import Login from './pages/Login'

function App() {
  return (
    <>
    <Navbar />
    <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/rooms" component={Rooms} />
    <Route exact path="/rooms/:slug" component={SingleRoom} />
    <Route exact path="/login-signup" component={Login} />
    <Route component={Error} />
    </Switch> 
    </>
  );
}

export default App;
