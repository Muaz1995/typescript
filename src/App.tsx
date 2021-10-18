import React, { FC, lazy, Suspense } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import * as ROUTES from './constants/routes'
import ReactLoader from './pages/Loader'


const HOME = lazy(() => import('./pages/Home'));
const SIGNIN = lazy(() => import('./pages/SignIn'))
const SIGNUP = lazy(() => import('./pages/SignUp'))




const App: FC = () => {
  return (
  <Router>
    <Suspense fallback = {<ReactLoader width = {70} height = {40} />}>
    <Switch>
      <Route exact path = {ROUTES.HOME} component = {HOME} />
      <Route exact path = {ROUTES.SIGN_IN} component = {SIGNIN} />
      <Route exact path = {ROUTES.SIGN_UP} component = {SIGNUP} />
    </Switch>
    </Suspense>
  </Router>
  )
}

export default App;
