import React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import { useLocation } from 'react-router-dom'
import { isAuthenticated } from './helpers/auth'

import TodoList from './components/TodoList'
import Login from './components/Login'

import Theme from './theme'

const routes = [
  {
    path: '/login',
    component: Login,
    privateRoute: false,
  },
  {
    path: '/',
    component: TodoList,
    privateRoute: true,
  },
]

const PrivateRoute = ({ layout: LayoutComponent, component: Component, ...rest }) => {
  const { pathname } = useLocation();

  const routeComponent = (props) => (isAuthenticated() ? (
    <LayoutComponent>
      <Component {...props} />
    </LayoutComponent>
  ) : (
    <Redirect to={{ pathname: '/login', state: { from: pathname } }} />
  ));
  
  return <Route exact render={routeComponent} {...rest} />
}

const Routes = () => {
  const renderRoutes = () => (
    routes.map((route, idx) => (
      route.privateRoute ? (
        <PrivateRoute key={idx} path='/' layout={Theme} component={TodoList} />
      ) : (
        <Route exact key={idx} path='/login' component={Login} />
      )
    ))
  )

  return (
    <BrowserRouter>
      {renderRoutes()}
    </BrowserRouter>
  )
}

export default Routes;