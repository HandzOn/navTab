import React from 'react';
import { StatusBar } from 'react-native';
import Routes from './route'

class App extends React.Component {
  render() {
    return (
      <>
        <StatusBar />
        <Routes />
      </>
    );
  }
}

export default App;