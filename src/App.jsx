import React from 'react';
import { Provider } from 'react-redux';
import store from './store.js';
import Header from './header/components/Header.jsx';
import Main from './main/components/Main.jsx';
import Footer from './footer/components/Footer.jsx';
import './common.scss';

const App = () => (
  <Provider store={store}>
    <div className="page">
      <Header />
      <Main />
      <Footer />
    </div>
  </Provider>
);

export default App;
