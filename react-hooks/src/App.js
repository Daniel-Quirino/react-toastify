import React from 'react';
import './App.css';

import Poem  from './Poem';
import Store from './Store';
import UseReducer from './UseReducer';

function App() {

  return (
    <Store>
      <div className="App">
        <header className="App-header">
          <Poem />
          {/* <UseReducer /> */}
        </header>
      </div>
    </Store>
  );
}

export default App;