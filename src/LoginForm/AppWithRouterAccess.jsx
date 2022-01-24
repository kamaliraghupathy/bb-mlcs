import React from 'react';
import { Route } from 'react-router-dom';
import { useHistory} from 'react-router-dom';
import { Security, SecureRoute, LoginCallback } from '@okta/okta-react';
import { OktaAuth, toRelativeUrl } from '@okta/okta-auth-js';
import SignIn from './Login';
import Staff from './Staff';


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
        <SecureRoute path='/' component={Staff}  />  
      <Route path='/login' render={() => <SignIn />} />
      <Route path='/login/callback' component={LoginCallback} />
    </Security>
  );
};
export default AppWithRouterAccess;