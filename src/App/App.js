import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import './App.css';

import fbConnection from '../helpers/data/connection';
import Navbar from '../components/Navbar/Navbar';
import Team from '../components/Team/Team';

fbConnection();

class App extends React.Component {
  state = {
    isAuthed: false,
  }

  componentDidMount() {
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ isAuthed: true });
      } else {
        this.setState({ isAuthed: false });
      }
    });
  }

  componentWillUnmount() {
    this.removeListener();
  }

  render() {
    const loadComponentIfAuthed = (component) => {
      if (this.state.isAuthed) {
        return component;
      }
      return (
        <h2 className="text-center text-white text-2xl">Please login to continue.</h2>
      );
    };

    return (
      <div className="bg-gray-900 h-screen">
        <Navbar isAuthed={this.state.isAuthed} />
        {loadComponentIfAuthed(<Team />)}
      </div>
    );
  }
}

export default App;
