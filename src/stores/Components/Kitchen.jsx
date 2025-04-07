import React from 'react';
 
import {kitchenData} from '../data/kitchen';
import './MobilesC.css';  
import { Link } from 'react-router-dom';

const kitchen = () => {
  return (
    <div className="mobile-section">
      <h2 className="mobile-title">Mobiles</h2>  
      <div className="mobiles-container">
        {kitchenData.slice(0, 6).map((item) => (  
          <Link key={item.id} to={`/Kitchen/${item.id}`}>  
            <div className="mobile-card">
              <img src={item.image} alt="Mobile" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default kitchen;
