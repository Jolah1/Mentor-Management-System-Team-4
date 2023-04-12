import React from 'react';
import { Route, Routes } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import Login from './page/Login';
import Signup from './page/signup';
import ForgotPassword from './page/forgotPassword';
import Home from './page/home'


function Main() {
  return (
    <>
      <Routes>
        <Route path="/account/login" exact element={<Login />} />
        <Route path="/account/signup" exact element={<Signup />} />
        <Route
          path="/account/forgot-password"
          exact
          element={<ForgotPassword />}
        />
        <Route
          path="/"
          exact
          element={
          
            <Layout>
              <Home />
            </Layout>
            
          }
        />
      </Routes>
    </>

  );
}

export default Main;