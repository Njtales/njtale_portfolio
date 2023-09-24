import React from 'react';

import { About, Footer, Header, Skills, Work } from './container';
import { Navbar } from './components';
import './App.scss';

const App = () => (
  <div className="app">
    <Navbar />
    <Header />
<<<<<<< HEAD
    <Work />
    <About />
    {/* <Skills /> */}
=======
    <About />
    <Work />
    <Skills />
>>>>>>> 58be3b803b0202b52abeb32a061277628cd57ab3
    <Footer />
  </div>
);

export default App;
