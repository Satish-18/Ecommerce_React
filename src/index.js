
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ProductsProvider } from './context/products_context'
import { FilterProvider } from './context/filter_context'
import { CartProvider } from './context/cart_context'
import { UserProvider } from './context/user_context'
import { Auth0Provider } from '@auth0/auth0-react' 

//dev-fnd4tu7s.us.auth0.com -- Domain
//xvB9Dh5xGJhzVuAAMTytNcTLyCWyZW0C -client id
ReactDOM.render(
  <Auth0Provider 
  domain='dev-fnd4tu7s.us.auth0.com'
  clientId='xvB9Dh5xGJhzVuAAMTytNcTLyCWyZW0C'
  redirectUri={window.location.origin}
  cacheLocation='localstorage'>
    <React.StrictMode>
      <UserProvider>
        <ProductsProvider>
          <FilterProvider>
            <CartProvider>
              <App/>
            </CartProvider>
          </FilterProvider>
        </ProductsProvider>
      </UserProvider>
    </React.StrictMode> 
  </Auth0Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
