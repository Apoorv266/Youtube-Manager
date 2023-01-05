import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain="dev-8tlt1ay2nvpy7i3f.us.auth0.com"
    clientId="CYBWuf4MYPlPtsZ4irVdmLK1JteBuU3D"
    redirectUri={window.location.origin}
  >
    <App />
    </Auth0Provider>
);


