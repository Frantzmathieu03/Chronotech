import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import Header from './components/Header';
import Theme from './components/Theme';

function App() {
  return (
    <Theme>
      <Header />
      <main>
        <Outlet />
      </main>
    </Theme>
  );
}

export default App;