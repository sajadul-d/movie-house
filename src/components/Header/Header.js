import React from 'react';
import img from '../../image/bg1.png.jpg'
import './Header.css'
const Header = () => {
    return (
        <div className="head" style={{ backgroundImage: `url(${img})` }}>
         <h1 className="name">Movie House</h1>
      </div>
    );
};

export default Header;