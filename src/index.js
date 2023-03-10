import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Auth0Provider
    domain="dev-8tlt1ay2nvpy7i3f.us.auth0.com"
    clientId="CYBWuf4MYPlPtsZ4irVdmLK1JteBuU3D"
    // redirectUri="http://localhost:3000/collection"
    redirectUri="https://youtubebuddy.netlify.app/collection"
  >

    <App />
    </Auth0Provider>
    </BrowserRouter>
);


