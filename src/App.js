import React, { useState } from 'react';
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
import AdminHome from './pages/AdminHome/adminHome';
import MySQL from './pages/MySQL/mysql';
import AWS from './pages/AWS/aws';
import Python from './pages/Python/python';
import UserAnswers from './pages/Users/User';

function App() {
  const [dataToSend, setDataToSend] = useState([]);
  const [email, setEmail] = useState('');

  const getData = (data) => {
    setDataToSend(data);
  }

  const userEmail = (user_email) => {
    console.log("Email", user_email);
    setEmail(user_email);
  }

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
            <Login getEmail={(id) => userEmail(id)}/>
          </Route>
          <Route exact={true} path="/admin_login">
            <Login getEmail={(id) => userEmail(id)}/>
          </Route>
          <Route exact={true} path="/home">
            <Home />
          </Route>
          <Route exact={true} path='/admin_home'>
            <AdminHome setData={(data) => getData(data)}/>
          </Route>
          <Route exact={true} path="/questions/mysql">
            <MySQL emailid={email}/>
          </Route>
          <Route exact={true} path="/questions/aws">
            <AWS emailid={email}/>
          </Route>
          <Route exact={true} path="/questions/python">
            <Python emailid={email}/>
          </Route>
          <Route exact={true} path="/admin_home/answers">
            <UserAnswers data={dataToSend}/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
