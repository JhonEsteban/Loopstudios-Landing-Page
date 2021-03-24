import React from 'react';

import Header from '../components/Header';
import MainContent from './MainContent';
import VirtualReality from '../components/VirtualReality';
import OurCreations from './OurCreations';

const App = () => {
  return (
    <>
      <Header />
      <MainContent>
        <VirtualReality />
        <OurCreations />
      </MainContent>
    </>
  );
};

export default App;
