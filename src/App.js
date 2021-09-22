import React from 'react'
import  {BrowserRouter as Router,Route,Switch } from "react-router-dom"
import {lazy } from "react";
import { Suspense } from 'react';
import * as ROUTES from './constants/routes';
const Login = lazy(() => import('./pages/login'));
const SignUp = lazy(() => import('./pages/signup'));
const NotFound = lazy(() => import('./pages/not-found'));

export const App = () => {
  return (
    
      <Router>
        <Suspense fallback={<p> Loading............. </p>}>

        <Switch>
          <Route path={ROUTES.LOGIN} component={Login} exact />
          <Route path={ROUTES.SIGN_UP} component={SignUp}  exact/>
          <Route component={NotFound}  />
         </Switch>
        </Suspense>
      </Router>
  )
}
