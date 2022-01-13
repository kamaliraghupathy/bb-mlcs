import React from 'react';
import { Link, useHistory} from 'react-router-dom';
import { useOktaAuth } from '@okta/okta-react';
import SignInForm from './SignInForm';
import AppWithRouterAccess from './/AppWithRouterAccess';
// import SignInForm from './SignInForm';
// import AppWithRouterAccess from './AppWithRouterAccess';

const Home = () => {
  const { authState, oktaAuth } = useOktaAuth();
  const History = useHistory();

  if (!authState) {
    return <div>Loading...</div>;
  }

  const button = authState.isAuthenticated ?
    <button onClick={() => {oktaAuth.signOut()}}>Logout</button> :
    <button onClick={() => {History.push('/login')}}>Login</button>;
    // remove above

  return (
    <div>
       <Link to='/'>Home</Link><br/>   
       {/*  doesn't need } */}
       <Link to='/staff'>Staff</Link><br/>    
       {/* remove  '/staff' */}
       {button}   
       {/* remove button */}
    </div>
  );
};
export default Home;




