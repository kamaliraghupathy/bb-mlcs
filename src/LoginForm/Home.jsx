import React from 'react';
import { Link, useHistory} from 'react-router-dom';
import { useOktaAuth } from '@okta/okta-react';
import SignInForm from './SignInForm';
import AppWithRouterAccess from './AppWithRouterAccess';

const Home = () => {
  const { authState, oktaAuth } = useOktaAuth();
  const History = useHistory();

  if (!authState) {
    return <div>Loading...</div>;
  }



  return (
    <div>
       <Link to='/staff'></Link><br/>    
    </div>
  );
};
export default Home;




