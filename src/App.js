import React from 'react';
import { isAuthenticated } from './helpers/auth'
import Theme from './theme'
import Routes from './routes'
import Login from './components/Login';


const App = () => {
  
  if (!isAuthenticated()) {
    return <Login />
  }

  return (
    <Theme >
      <Routes />
    </Theme>
  );
}

export default App;
