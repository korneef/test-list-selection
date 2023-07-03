import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HeaderLayout } from 'layouts';
import { HomePage, History } from 'pages'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={ '/' } element={ <HeaderLayout/> }>
          <Route index element={ <HomePage/> }/>
          <Route path={ 'history' } element={ <History/> }/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
