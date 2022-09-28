import './App.css';
import React, { Suspense } from 'react';
import Header from './Components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Components/Footer/Footer';
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
      <Footer></Footer>
    </div>
  );
}

export default App;
