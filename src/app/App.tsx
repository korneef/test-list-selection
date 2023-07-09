import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { HeaderLayout } from 'layouts';
import { HomePage, History } from 'pages';
import { useAppDispatch } from './store/hooks';
import { createList } from './store/slices/listSlice';


function App() {
const dispatch = useAppDispatch()
  useEffect(() => {
    fetch(`${ process.env.REACT_APP_BASE_URL }`)
      .then((response) => response.json())
      .then(data => dispatch(createList(data.docs)))
  }, [dispatch]);

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
