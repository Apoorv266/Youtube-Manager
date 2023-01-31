
import React from "react";
import { withAuthenticationRequired, useAuth0 } from '@auth0/auth0-react';

const PrivateRoute = ({ component, ...propsForComponent }) => {
  const {isAuthenticated} = useAuth0();
  
  const Cp = withAuthenticationRequired(component, {
    onRedirecting: () => {

        return <h3 style={{ color: "white", textAlign: "center" }}>Loading...</h3>
      
    }
  });

  return <Cp {...propsForComponent} />
}

export default PrivateRoute;