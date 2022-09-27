import './App.css';
import React, { Suspense } from 'react';
import Header from './Components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Slider from './Components/Home/Slider';
import 'bootstrap/dist/css/bootstrap.min.css';
const Home = React.lazy(() => import('./Components/Home/Home'));

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={
          <Suspense fallback={<div>Loading...</div>}>
            <Home></Home>
          </Suspense>
        } ></Route>
      </Routes>

    </div>
  );
}

export default App;
