import React from 'react';
import { mobileData } from '../data/mobiles';
import './MobilesC.css';  
import { Link } from 'react-router-dom';

const Mobiles = () => {
  return (
    <div className="mobile-section">
      <h2 className="mobile-title">Mobiles</h2>  
      <div className="mobiles-container">
        {mobileData.slice(0, 6).map((item) => (  
          <Link key={item.id} to={`/mobiles/${item.id}`}>  
            <div className="mobile-card">
              <img src={item.image} alt="Mobile" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Mobiles;
