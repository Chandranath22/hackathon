import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './scss/main.scss';

// Pages
import Login from './pages/Login/login';
import Register from './pages/Register/register';
import LandingPage from './pages/LandingPage/landingPage';
import Home from './pages/Home/home';
import MySQL from './pages/MySQL/mysql';
import AWS from './pages/AWS/aws';
import Python from './pages/Python/python';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact={true} path="/">
            <LandingPage />
          </Route>
          <Route exact={true} path="/register">
            <Register />
          </Route>
          <Route exact={true} path="/candidate_login">
            <Login />
          </Route>
          <Route exact={true} path="/admin_login">
            <Login />
          </Route>
          <Route exact={true} path="/home">
            <Home />
          </Route>
          <Route exact={true} path="/questions/mysql">
            <MySQL />
          </Route>
          <Route exact={true} path="/questions/aws">
            <AWS />
          </Route>
          <Route exact={true} path="/questions/python">
            <Python />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
