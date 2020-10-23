import React from 'react';
import Menu from './Components/Menu';
import Appetizers from './Components/Appetizers';
import Desserts from './Components/Desserts';
import Header from './Components/Header';
import Lunch from './Components/Lunch';
import Drinks from './Components/Drinks';


class App extends React.Component {

  render() {
    return (
      <>
        <Header />
        <Appetizers />
        <Lunch />
        <Menu />
        <Desserts />
        <Drinks />
      </>
    )
  }
}

export default App;

