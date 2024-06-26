import React from 'react';
import './App.css';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';
import PropTypes from 'prop-types';


function App({ isLoggedIn = false}) {

  if (!isLoggedIn) {
    return (
      <>
        <Notifications />
        <div className="App">
          <Header />
          <Login />
          <Footer />
        </div>
      </>
    );
  }
  else {
    return (
      <>
        <Notifications />
        <div className="App">
          <Header />
          <CourseList />
          <Footer />
        </div>
      </>
    )
  }
}

export default App;
