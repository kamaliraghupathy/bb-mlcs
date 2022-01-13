import React from 'react';
import { Route } from 'react-router-dom';
import { useHistory} from 'react-router-dom';
import { Security, SecureRoute, LoginCallback } from '@okta/okta-react';
import { OktaAuth, toRelativeUrl } from '@okta/okta-auth-js';
import Home from './Home';
import SignIn from './Login';
import Staff from './Staff'
import SignInForm from './SignInForm';

const AppWithRouterAccess = () => {
  const History = useHistory();
  const onAuthRequired = () => {
    History.push('/login');
  };

  const oktaAuth = new OktaAuth({
    issuer: 'https://dev-61611200.okta.com/oauth2/default',
    clientId: '0oa3emhbas7xmfVaP5d7',
    redirectUri:'http://localhost:3000/login/callback',
    pkce: true
  });

  const restoreOriginalUri = async (_oktaAuth, originalUri) => {
    History.replace(toRelativeUrl(originalUri,'https://localhost:3000'));
  };

  return (
    <Security oktaAuth={oktaAuth} restoreOriginalUri={restoreOriginalUri}>
         {/* <Route path='/' exact={true} component={Home} />      */}
        {/* remove above */}
       <SecureRoute path='/' component={Staff}  />  
       {/* remove staff */}
      <Route path='/login' render={() => <SignIn />} />
      <Route path='/login/callback' component={LoginCallback} />
    </Security>
  );
};
export default AppWithRouterAccess;