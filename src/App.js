import React from 'react';
import Menu from './Components/Menu';
import Appetizers from './Components/Appetizers';
import Desserts from './Components/Desserts';


class App extends React.Component {

  render() {
    return (
      <>
        <div className="App">
          <header className="App-header">

            <p>
              Lacerated Brains
        </p>

          </header>
        </div>
        <div>
          <p>
            Appetizers
      </p>
        </div>
        <Appetizers />
        <div>
          <p>
            Entrees
      </p>
        </div>
        <Menu />
        <div>
          <p>
            Desserts
      </p>
        </div>
        <Desserts />
      </>
    )
  }
}

export default App;

