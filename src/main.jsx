import { StrictMode } from 'react';
import { HashRouter } from 'react-router';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
  /*  
  <StrictMode> lets you find common bugs in your components early during development.

  https://react.dev/reference/react/StrictMode

   */
  <StrictMode>
    {/* 
    This appliccation is hosted on GH Pages. Since GH Pages doesn't support a redirect file, we are using the HashRouter

    https://api.reactrouter.com/v7/functions/react_router.HashRouter.html
     */}
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>
);
