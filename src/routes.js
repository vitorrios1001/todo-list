import React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';

import { isAuthenticated } from './helpers/auth'

import TodoList from './components/TodoList'
import Login from './components/Login'

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            isAuthenticated() ? (
                <Component {...props} />
            ) : (
                    <Redirect
                        to={{
                            pathname: '/login',
                            state: { from: props.location }
                        }}
                    />
                )
        }
    />
)

const Routes = () => (
    <BrowserRouter>
        <PrivateRoute exact path='/' component={TodoList} />
        <Route exact path='/login' component={Login} />
    </BrowserRouter>
)

export default Routes;