import React from 'react';
import LeftImage from './hero-right.jpg';
import './Home.css';

const Home = () => {
  return (
    <div>
      <div className='container'>
        <div className='row'>
          <div className='hero-left col-md-6'>
            <h2>Welcome to <span className='hero-logo'>State Bank Of India</span></h2>
            <p>Start having more effective conversations today and discover the power of SBI in building trust and understanding.</p>
            <button className="hero-button cbtn btn-primary">Open Account in SBI to get Daily Offers and enjoy</button>
          </div>
          <div className='col-md-6'>
            <img src={LeftImage} />
          </div>
        </div>

        <BodyArea />
      </div>
    </div>
  );
};

const BodyArea = () => {
  return (
    <div className='row'>
      <div className='body-content col-md-4'>
        <h3>Checquing Account</h3>
        <p>With a checking account, you can deposit and withdraw money easily through various channels, including ATMs, online banking, mobile apps, and bank branches. This accessibility ensures that your funds are always within reach whenever you need them</p>
      </div>

      <div className='body-content col-md-4'>
        <h3>Saving Account</h3>
        <p>With a checking account, you can deposit and withdraw money easily through various channels, including ATMs, online banking, mobile apps, and bank branches. This accessibility ensures that your funds are always within reach whenever you need them</p>
      </div>

      <div className='body-content col-md-4'>
        <h3>Current Account</h3>
        <p>With a checking account, you can deposit and withdraw money easily through various channels, including ATMs, online banking, mobile apps, and bank branches. This accessibility ensures that your funds are always within reach whenever you need them</p>
      </div>
    </div>
  );
}

export default Home;