import React from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Header />
      </div>
    </div>
  );
}

export default App;