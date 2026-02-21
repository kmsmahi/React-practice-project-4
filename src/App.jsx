import React from 'react';
import Navbar from './assets/components/Navbar/navbar';
import Banner from './assets/components/Banner/banner';

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Banner>Kitchen Room</Banner>
    </div>
  );
};

export default App;