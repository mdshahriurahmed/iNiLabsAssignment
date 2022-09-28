import './App.css';
import React, { Suspense } from 'react';
import Header from './Components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Components/Footer/Footer';

const NotFound = React.lazy(() => import('./Components/NotFound/NotFound'));
const About = React.lazy(() => import('./Components/About/About'));
const Gallery = React.lazy(() => import('./Components/Gallery/Gallery'));
const Teachers = React.lazy(() => import('./Components/Teachers/Teachers'));
const Event = React.lazy(() => import('./Components/Event/Event'));
const Home = React.lazy(() => import('./Components/Home/Home'));
const Contact = React.lazy(() => import('./Components/Contact/Contact'));
const Blog = React.lazy(() => import('./Components/Blog/Blog'));
const Admission = React.lazy(() => import('./Components/Admission/Admission'));
const Login = React.lazy(() => import('./Components/Login/Login'));

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
        <Route path='/about' element={
          <Suspense fallback={<div>Loading...</div>}>
            <About></About>
          </Suspense>
        } ></Route>
        <Route path='/teachers' element={
          <Suspense fallback={<div>Loading...</div>}>
            <Teachers></Teachers>
          </Suspense>
        } ></Route>
        <Route path='/events' element={
          <Suspense fallback={<div>Loading...</div>}>
            <Event></Event>
          </Suspense>
        } ></Route>
        <Route path='//Gallery' element={
          <Suspense fallback={<div>Loading...</div>}>
            <Gallery></Gallery>
          </Suspense>
        } ></Route>
        <Route path='/contact' element={
          <Suspense fallback={<div>Loading...</div>}>
            <Contact></Contact>
          </Suspense>
        } ></Route>
        <Route path='/blog' element={
          <Suspense fallback={<div>Loading...</div>}>
            <Blog></Blog>
          </Suspense>
        } ></Route>
        <Route path='/admission' element={
          <Suspense fallback={<div>Loading...</div>}>
            <Admission></Admission>
          </Suspense>
        } ></Route>
        <Route path='/login' element={
          <Suspense fallback={<div>Loading...</div>}>
            <Login></Login>
          </Suspense>
        } ></Route>
        <Route path='/*' element={
          <Suspense fallback={<div>Loading...</div>}>
            <NotFound></NotFound>
          </Suspense>
        } ></Route>

      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
