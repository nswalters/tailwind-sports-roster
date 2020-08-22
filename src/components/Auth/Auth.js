import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import PropTypes from 'prop-types';

class Auth extends React.Component {
  static propTypes = {
    isAuthed: PropTypes.bool.isRequired,
  }

  loginClickEvent = (e) => {
    e.preventDefault();
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(googleProvider);
  }

  logoutClickEvent = (e) => {
    e.preventDefault();
    firebase.auth().signOut();
  }

  render() {
    const { isAuthed } = this.props;

    const authButton = () => {
      if (isAuthed) {
        return (
          <button onClick={this.logoutClickEvent}
            type="button"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150">
              Logout
          </button>
        );
      }

      return (
        <button onClick={this.loginClickEvent}
          type="button"
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-orange-600 hover:bg-orange-500 focus:outline-none focus:border-orange-700 focus:shadow-outline-indigo active:bg-orange-700 transition ease-in-out duration-150">
            Login
        </button>
      );
    };

    return (
      <div>
        { authButton() }
      </div>
    );
  }
}

export default Auth;
