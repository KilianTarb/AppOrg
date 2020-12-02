import React from 'react';
import '../assets/css/App.css';
import ApplicationContainer from './ApplicationContainer';

export default class App extends React.Component {
  render() {
    return (
      <div className="container">
        <ApplicationContainer />
      </div>
    );
  }
}