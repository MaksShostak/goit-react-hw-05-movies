import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { HashRouter } from 'react-router-dom';
// import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  //  <React.StrictMode>
  <HashRouter>
    {/* <BrowserRouter basename="/goit-react-hw-05-movies/"> */}

    <App />

    {/* </BrowserRouter> */}
  </HashRouter>
  //  </React.StrictMode>
);
