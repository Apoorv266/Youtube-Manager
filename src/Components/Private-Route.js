
import React from "react";
import { withAuthenticationRequired } from '@auth0/auth0-react';
import Loading from "./Loading";

const PrivateRoute = ({ component, ...propsForComponent}) => {
    const Cp = withAuthenticationRequired(component, {
      onRedirecting: () => <Loading/>,
    });
    
    return <Cp {...propsForComponent} />
  }

export default PrivateRoute;