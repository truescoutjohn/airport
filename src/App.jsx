import React from 'react';
import Header from './header/components/Header.jsx';
import Main from './main/components/Main.jsx';
import Footer from './footer/components/Footer.jsx';
import './common.scss';

const App = () => (
  <div className="page">
    <Header />
    <Main />
    <Footer />
  </div>
);

export default App;
