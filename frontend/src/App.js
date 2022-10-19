import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  Routes,
  Route,
} from 'react-router-dom';
import Header from './components/Header';
import Overview from './pages/Overview';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Footer from './components/Footer';

import './styles/main.css';
import { browserRoutes } from './routes/browserRoutes';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path={browserRoutes.OVERVIEW} element={<Overview />} />
        <Route path={browserRoutes.LOGIN} element={<Login />} />
        <Route path={browserRoutes.SIGNUP} element={<Signup />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
