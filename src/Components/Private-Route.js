
import React from "react";
import { withAuthenticationRequired } from '@auth0/auth0-react';

const PrivateRoute = ({ component, ...propsForComponent}) => {
    const Cp = withAuthenticationRequired(component);
    return <Cp {...propsForComponent} />
  }

export default PrivateRoute;