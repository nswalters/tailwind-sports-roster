import React from 'react';
import PropTypes from 'prop-types';

import Auth from '../Auth/Auth';

class Navbar extends React.Component {
  static propTypes = {
    isAuthed: PropTypes.bool.isRequired,
  }

  render() {
    const { isAuthed } = this.props;

    return (
      <nav className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex justify-between h-16">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out" aria-label="Main menu" aria-expanded="false">
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex-shrink-0 flex items-center">
                <div className="text-gray-700 text-2xl">Sports Roster</div>
              </div>
              <div className="flex items-center ml-auto">
                <span className="inline-flex rounded-md shadow-sm">
                  <Auth isAuthed={isAuthed} />
                </span>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
