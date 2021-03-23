import React from 'react';

import Header from '../components/Header';
import MainContent from './MainContent';
import VirtualReality from '../components/VirtualReality';

const App = () => {
  return (
    <>
      <Header />
      <MainContent>
        <VirtualReality />
      </MainContent>
    </>
  );
};

export default App;
