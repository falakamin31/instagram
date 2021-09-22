import React from 'react'
import  {BrowserRouter as Router,Route,Switch } from "react-router-dom"
import {lazy } from "react";
import { Suspense } from 'react';
import * as ROUTES from './constants/routes';
const Login = lazy(() => import('./pages/login'));
const SignUp = lazy(() => import('./pages/signup'));

export const App = () => {
  return (
    
      <Router>
        <Suspense fallback={<p> Loading............. </p>}>

        <Switch>
          hello
          <Route path={ROUTES.LOGIN} component={Login} />
          <Route path={ROUTES.SIGN_UP} component={SignUp} />
         </Switch>
        </Suspense>
      </Router>
  )
}
