import React from 'react';

const NavigationDots = ({ active }) => (
  <div className="app__navigation">
<<<<<<< HEAD
    {['home', 'work', 'about','contact'].map((item, index) => (
=======
    {['home', 'about', 'work', 'skills', 'contact'].map((item, index) => (
>>>>>>> 58be3b803b0202b52abeb32a061277628cd57ab3
      <a
        href={`#${item}`}
        key={item + index}
        className="app__navigation-dot"
        // style={active === item ? { backgroundColor: '#FEDC00' } : {}}
      />
    ))}
  </div>

);

export default NavigationDots;
