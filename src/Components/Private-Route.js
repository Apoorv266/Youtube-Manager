
import React from "react";
import { withAuthenticationRequired, useAuth0 } from '@auth0/auth0-react';
import Loading from "./Loading";

const PrivateRoute = ({ component, ...propsForComponent }) => {
  const {isAuthenticated} = useAuth0();
  
  const Cp = withAuthenticationRequired(component, {
    onRedirecting: () => {
      if (!isAuthenticated) {
        return <h3>Redirecting to login...</h3>
      } else if(isAuthenticated){
       return <h3>Redirecting...</h3>
      }
    }
  });

  return <Cp {...propsForComponent} />
}

export default PrivateRoute;